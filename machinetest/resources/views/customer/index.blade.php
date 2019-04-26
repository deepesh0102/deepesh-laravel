<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Basic Table</h2>
  <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
  @if(Session::has('flash_message_error'))
        <div class="alert alert-error alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
                <strong>{!! session('flash_message_error') !!}</strong>
        </div>
    @endif
    @if(Session::has('flash_message_success'))
        <div class="alert alert-success alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
                <strong>{!! session('flash_message_success') !!}</strong>
        </div>
    @endif
  <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Email</th>
        <th>Picture</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        @foreach($customers as $customer)

        <tr>
        <td>{{$customer->name}}</td>
        <td>{{$customer->phone}}</td>
        <td><img height="30px" width="30px" src="{{asset('/public/customer_image/').'/'.$customer->image ?? '40x40.png'}}" alt=""></td>
        <td>
            <a class="btn btn-primary" href="{{route('customer.edit',$customer->id)}}">Edit</a>
            <a class="btn btn-danger" href="{{route('customer.destroy',$customer->id)}}"
                onclick="event.preventDefault(); document.getElementById('delete-form').submit();">Delete</a>

                <form id="delete-form" action="{{ route('customer.destroy',$customer->id) }}" method="POST" style="display: none;">
                {{ method_field('DELETE') }}
                @csrf
                                    </form>
        </td>
      </tr>

        @endforeach

    </tbody>
  </table>
</div>

</body>
</html>

