function triangel() {

   const triangel_base_field = document.getElementById('triangel_base');
   const triangel_base_value = triangel_base_field.value;
   const triangel_base = parseFloat(triangel_base_value);


   const showResult = document.getElementById('result');


   if (isNaN(triangel_base)) {
      showResult.innerText = 'please Input Base Number';
      triangel_base_field.value = '';
      return;
   }
   // triangel_height
   const triangel_height_field = document.getElementById('triangel_height');
   const triangel_height_value = triangel_height_field.value;
   const triangel_height = parseFloat(triangel_height_value);

   if (isNaN(triangel_height)) {
      showResult.innerText = 'please Input Height Number';
      triangel_height_field.value = '';
      return;
   }



   const area = 0.5 * triangel_base * triangel_height;
   if (area) {
      showResult.innerText = 'Done';
   }
   // triangel_area
   const triangel_area = document.getElementById('triangel_area');
   triangel_area.innerText = area;



}

// rectangel
function rectangel() {
   const rectangel_width_field = document.getElementById('rectangel_width');
   const rectangel_width_value = rectangel_width_field.value;
   const rectangel_width = parseFloat(rectangel_width_value);

   if (isNaN(rectangel_width)) {
      alert('vai width e numbre add koro');
      return;
   }
   // rectangel_width_field.value = '';

   // rectangel_length
   const rectangel_length_field = document.getElementById('rectangel_length');
   const rectangel_length_value = rectangel_length_field.value;
   const rectangel_length = parseFloat(rectangel_length_value);

   if (isNaN(rectangel_length)) {
      alert('vai width e numbre add koro');
      return;
   }
   // rectangel_length_field.value = '';

   // area 
   const area = rectangel_width * rectangel_length;
   // rectangel_area
   const rectangel_area = document.getElementById('rectangel_area');
   rectangel_area.innerText = area;

}