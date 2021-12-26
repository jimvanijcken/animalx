<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::where('user_id', auth()->id())->get();
        return $this->respondOK($orders);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'products' => ['array'],
            'products.*' => ['array:product_id,amount'],
            'products.*.product_id' => ['required', 'exists:products,id'],
            'products.*.amount' => ['required', 'integer']
        ]);

        // Create order
        $order = Order::create([
            'user_id' => auth()->id()
        ]);

        // Attach products to order
        $order->products()->attach($request->products);

        return $this->respondCreated($order, 'Order has been created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::where('user_id', auth()->id())->findOrFail($id);
        return $this->respondOK($order);
    }
}
