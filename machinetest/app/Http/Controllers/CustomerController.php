<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Image;
// use Auth;

class CustomerController extends Controller
{


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       // $this->middleware('auth:admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
//         $Itineraries = Itinerary::where(['is_delete'=>0,'user_id'=>Auth::user()->id])->with([
//             'itineraryItem'=> function($q){
// //                $q->select('id','product_name','category_id');
//                 $q->where(['is_delete'=>0,'user_id'=>Auth::user()->id]);
//             }
//         ])->paginate(2);
        $customers = Customer::paginate(2);

       // dd($customers);

		return view('customer.index')->with(compact('customers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
		return view('customer.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request);

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:products',
            'address' => 'required',
            // meta_description' => 'required',
            ]);
            //server side errors
            if ($validator->fails()) {
                return redirect()->route('customer.create')
                                ->withErrors($validator)
                                ->withInput();
            }


        $customer = new Customer();

        $customer->name = $request->name;
        $customer->phone = $request->phone;
        $customer->address = $request->address;
        $customer->email = $request->email;

        // $data['password'] = Hash::make($request->password);

        if($request->file('image') && $request->file('image')->isValid()){

            $image_tmp = $request->image;

            $extension = $image_tmp->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $large_image_path = public_path() . '/customer_image/' . $filename;

            // Resize Images
            Image::make($image_tmp)->save($large_image_path);

            // Store image name in category table
            $customer->image = $filename;

        } else {

            $customer->image = 'demo.jpg';
        }

        $customer->save();


        return redirect()->route('customer.index')->with('flash_message_success','Customer has been added successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
		return view('show');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        $customer = Customer::find($customer->id);

        return view('customer.edit')->with(compact('customer'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        $customer_update = Customer::find($customer->id);

        $customer_update->name = $request->name;

        $customer_update->email = $request->email;
        $customer_update->address = $request->address;
        $customer_update->phone = $request->phone;


        if($request->file('image') && $request->file('image')->isValid()){

            $image_tmp = $request->image;

            $extension = $image_tmp->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $large_image_path = public_path() . '/customer_image/' . $filename;

            // Resize Images
            Image::make($image_tmp)->save($large_image_path);

            // Store image name in category table
            $customer_update->image = $filename;

        } else {

            //$customer->image = 'demo.jpg';
        }

        $customer_update->save();

        return redirect()->route('customer.index')->with('flash_message_success','Customer has been Updated successfully!');


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {

        Customer::destroy($customer->id);

        return redirect()->route('customer.index')->with('flash_message_success','Customer has been Deleted successfully!');
    }
}
