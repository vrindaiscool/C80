name_of_student_array = [];

function submit() {
    var display_student_array = [];

    for (var v=1; v<= 4; v++ ) {
        var name_of_the_students = document.getElementById ("name_of_the_student_"+ v).value;
        console.log(name_of_the_students);
        name_of_student_array.push(name_of_the_students);
        console.log(name_of_student_array);
    }
 
    var length=name_of_student_array.length;
    console.log(length);

    for (var vr=0; vr< length; vr++) {
      display_student_array.push("<h4>name-" + name_of_student_array [vr] + "</h4>" ); 
      console.log(display_student_array);
    }

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;

    var remove_comma=display_student_array.join("");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    document.getElementById("submit_button").style.display="none";

    document.getElementById("sort_button").style.display="inline-block";

}

function sorting() {
    name_of_student_array.sort();
    console.log(name_of_student_array);

    var display_student_array_sorting=[];

    var length=name_of_student_array.length;
    console.log(length);

    for (var vr=0; vr< length; vr++) {
        display_student_array_sorting.push("<h4>name-" + name_of_student_array [vr] + "</h4>" ) ;
        console.log(display_student_array_sorting);
      }

      var remove_comma=display_student_array_sorting.join("");
    console.log(remove_comma);

    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML="<h3>" + name_of_student_array + "</h3>";
}


    
