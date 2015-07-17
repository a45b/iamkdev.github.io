<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DCY</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<style>
		body{ margin-top: 60px; }
	</style>
  </head>
  <body>
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<select class="form-control">
					<option>Funny</option>
					<option>Music</option>
				</select>
			</div>
		</div>
	</div>
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<h4 class="modal-title" id="myModalLabel">Categories</h4>
	      </div>
	      <div class="modal-body">
			
	      </div>
	      <div class="modal-footer">
		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		<button type="button" class="btn btn-primary">OK</button>
	      </div>
	    </div>
	  </div>
	</div>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

	<script>
		$('select').on('click', function(){
			$('#myModal').modal("show");
			getCategory();
		});

		function getCategory(){			
			$.ajax({
			    type: "GET",
			    url: "level1.xml",
			    cache: false,
			    dataType: "xml",
			    success: function(xml) {
				$('.modal-body').empty();
				$(xml).find('Category').each(function(){
					var data = [];
					data['cid']    = $(this).find("CategoryID").text();
					data['cname']   = $(this).find("CategoryName").text();
					data['clevel'] = $(this).find("CategoryLevel").text();
					data['cparent_id'] = $(this).find("CategoryParentID").text();
					data['isleaf'] = $(this).find("LeafCategory").text() == "true" ? true : false;
//					console.log(data);
					$('.modal-body').append('<a href="#" onclick="getSubCategories('+data['cid']+','+data['isleaf']+','+data['clevel']+')" class="list-group-item">'+data["cname"]+'</a>');
				});
				
				
			    }
			});
			
		}

		function getSubCategories(cid, isleaf, clevel){			
			console.log(cid, isleaf, clevel);
			cid = 20081;
			clevel = clevel + 1;
			var url = 'level'+clevel+'.xml';
			if(!isleaf){
			$.ajax({
			    type: "GET",
			    url: url,
			    cache: false,
			    dataType: "xml",
			    success: function(xml) {
				$('.modal-body').empty();
				$(xml).find('Category').each(function(){
					var data = [];
					data['cid']    = $(this).find("CategoryID").text();
					data['cname']   = $(this).find("CategoryName").text();
					data['clevel'] = $(this).find("CategoryLevel").text();
					data['cparent_id'] = $(this).find("CategoryParentID").text();
					data['isleaf'] = $(this).find("LeafCategory").text() == "true" ? true : false;
//					console.log(data);
					if(data['clevel'] == clevel){
					$('.modal-body').append('<a href="#" onclick="getSubCategories('+data['cid']+','+data['isleaf']+','+data['clevel']+')" class="list-group-item">'+data["cname"]+'</a>');}
				});
			}
	
			});
			}
		}
	</script>
  </body>
</html>


