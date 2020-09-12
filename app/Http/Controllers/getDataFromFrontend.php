<?php

namespace App\Http\Controllers;

use App\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class getDataFromFrontend extends Controller
{
    /**
     * @param Request $request
     */
    public function buyProductFromCart(Request $request)
    {
        if (Auth::user()->email == $request->email) {
            $productsId = [];
            foreach ($request->products as $index => $product) {
                $productsId[] = $product['productId'];
            }
            Orders::create([
                'name' => $request->firstname . ' ' . $request->lastname,
                'email' => $request->email,
                'address' => $request->country . ', ' . $request->zipcode . ', ' . $request->address,
                'description' => json_encode($productsId),
                'amount' => round($request->amountWithDiscount, 2),
                'value' => $request->value
            ]);
        } else {
            echo 'not added';
        }
    }
}
