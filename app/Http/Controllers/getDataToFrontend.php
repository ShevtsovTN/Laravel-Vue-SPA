<?php

namespace App\Http\Controllers;

use App\Http\Resources\BillingData;
use App\Products;
use App\Http\Resources\Products as ProductsResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class getDataToFrontend extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function getProducts()
    {
        return ProductsResource::collection(Products::all());
    }

    /**
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function getUserBillingData(Request $request)
    {
        return BillingData::collection(Products::all());
    }

}
