<?php

namespace App\Http\Controllers;

use App\Orders;
use App\Products;
use App\Promocodes;
use App\Http\Resources\Promocodes as PromocodesResource;
use App\Http\Resources\Products as ProductsResource;
use App\Http\Resources\Orders as OrdersResource;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class getDataToFrontend extends Controller
{
    use AuthenticatesUsers;
    /**
     * @return AnonymousResourceCollection
     */
    public function getProducts()
    {
        return ProductsResource::collection(Products::all());
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function getOrders()
    {
        if (Auth::check()) {
            return OrdersResource::collection(Orders::select('id', 'address', 'description', 'value', 'amount')->where('email', Auth::user()->email)->get());
        }
    }

    /**
     * @return AnonymousResourceCollection
     */
    public function getPromocodes()
    {
        if (Auth::check()) {
            return PromocodesResource::collection(Promocodes::all()->where('email', Auth::user()->email));
        }
    }

}
