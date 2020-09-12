<?php

namespace App\Http\Controllers;

use App\Orders;
use App\Products;
use App\Promocodes;
use App\Currency;
use App\Http\Resources\Promocodes as PromocodesResource;
use App\Http\Resources\Products as ProductsResource;
use App\Http\Resources\Orders as OrdersResource;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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

    /**
     * @return AnonymousResourceCollection
     */
    public function getCurrencyRates()
    {
        $yesterday = date('Y-m-d H:i:s', mktime(date('H'), date('i'), date('s'), date('m')  , date('d')-1, date('Y')));
        $data = [
            [
                'title' => 'EUR',
                'rates' => 1
            ]
        ];
        if (DB::table('currencies')->where('updated_at', '>', $yesterday)->exists()) {
            $dataFormDB = Currency::select('symbols', 'rates')->where('updated_at', '>', $yesterday)->get();
            foreach ($dataFormDB as $index => $item) {
                $data[] = [
                    'title' => $item['symbols'],
                    'rates' => (float)$item['rates']
                ];
            }
        } else {
            $response = json_decode(file_get_contents('https://api.exchangeratesapi.io/latest?symbols=USD'), true);
            foreach ($response['rates'] as $index => $rate) {
                $data[] = [
                    'title' => $index,
                    'rates' => (float)$rate
                ];
                DB::table('currencies')->update([
                    'updated_at' => date('Y-m-d H:i:s'),
                    'rates' => $rate
                ])->where('symbols', "$index");
            }
            $data = json_encode($data);
        }
        return $data;
    }

}
