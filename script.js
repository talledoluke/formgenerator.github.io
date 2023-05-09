<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <title>Talledo Form Maker </title>
	<br>
</head>

<script>
document.addEventListener("contextmenu", function(event){event.preventDefault();
alert('Right Click is Disabled');    
}, false);
</script>

<body>
    <main class="container">
        <center><h1><b>Talledo Form Maker!!</b></h1></center>
		<hr>
        <select id="type" class="form-select">
            <option value="text">Text</option>
            <option value="button">Button</option>
            <option value="radio">Radio</option>
            <option value="checkbox">Checkbox</option>
        </select>
        <input type="text" class="form-control mt-2" id="label" placeholder="Label">
        <div class="d-flex flex-row justify-content-end">
		<hr>
		<div class="col text-center">
		<button class="btn btn-danger mt-2" onclick="deleteElement()">Delete Element</button>
		&nbsp;
            <button class="btn btn-primary mt-2" onclick="insert()">Insert Element</button>
        </div>
		</div>
        <hr>
        <div class="card p-2" id="display">
            <center><h4 class="text-secondary">Your Generated Form Here</h4></center>
        </div>
    </main>
    <script src="script.js"></script>
</body>
</html>
