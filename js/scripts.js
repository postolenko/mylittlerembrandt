$(document).ready(function() {


	// console.log($("[class]").length);
	// var classNameArr = [];

	// for(var countClass = 0; countClass <= ($("[class]").length - 1); ++countClass) {

	// 	classNameArr.push( "."+$("[class]:eq("+countClass+")").attr("class")+"{}\n");

	// }

	// alert(classNameArr);


	// var indexChoiseFile;

	 // $(function (){

	 	// var indexChoiseFile = $("#chose_file").index();

	 	// console.log(indexChoiseFile);

        //     if($("#chose_file").length)
        //     {
        //         $("#chose_file").click(function(){

        //         	var indexChoiseFile = $("#chose_file").index();

        //             $("#chose_file_input:eq("+ indexChoiseFile +")").click();
        //             return(false);
        //         });

        //         $("#chose_file_input:eq("+ indexChoiseFile +")").change(function(){
        //             $("#chose_file_text:eq("+ indexChoiseFile +")").html($(this).val());
        //         }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
        //     }
        // });



	 $(".chose_file").click(function(){

	 	var indexChoiseFile = $(".chose_file").index(this);

	 	// console.log(indexChoiseFile);

	 	$(".chose_inpt:eq("+ indexChoiseFile +")").click();

			// console.log(indexChoiseFile);

            return(false);

	 });


});

