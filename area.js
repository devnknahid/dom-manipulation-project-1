function triangel() {
   const triangel_base_field = document.getElementById('triangel_base');
   const triangel_base_value = triangel_base_field.value;
   const triangel_base = parseFloat(triangel_base_value);


   if (isNaN(triangel_base)) {
      alert('vai base e numbre add koro');
      return;
   }
   // triangel_base_field.value = '';
   // triangel_height
   const triangel_height_field = document.getElementById('triangel_height');
   const triangel_height_value = triangel_height_field.value;
   const triangel_height = parseFloat(triangel_height_value);

   if (isNaN(triangel_height)) {
      alert('vai height e valu add koro');
      return;
   }
   // triangel_height_field.value = '';

   const area = 0.5 * triangel_base * triangel_height;
   // triangel_area
   const triangel_area = document.getElementById('triangel_area');
   triangel_area.innerText = area;
}

// rectangel
function rectangel() {

}