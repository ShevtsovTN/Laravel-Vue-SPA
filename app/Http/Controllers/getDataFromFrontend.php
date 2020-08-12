<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class getDataFromFrontend extends Controller
{
    /**
     * @param Request $request
     */
    public function addProductToCart(Request $request)
    {
        $product = $request->productId;
        dd($product);
    }

    /**
     * @param Request $request
     */
    public function buyProductFromCart(Request $request)
    {
        dd($request->input());
    }
}
