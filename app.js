// Creating a new element

let editableDiv = document.createElement('div');
        
// Adding text to that created element

let value = localStorage.getItem('text');   
let text;

if (value == null){
    text = document.createTextNode
    ('Click on it to edit this Editable Div');
}
else{
    text = document.createTextNode(value);
}

editableDiv.appendChild(text);
editableDiv.setAttribute('id', 'elem');
editableDiv.setAttribute('class', 'elem');
editableDiv.setAttribute('style',
'font-size:3rem;border:3px solid;width:350px;height:200px;');

// Access the main container

let container = document.querySelector('.container');

// Inserting the element with id = first

container.insertBefore(editableDiv, first);

// Adding event listener to the divElem

editableDiv.addEventListener('click',function (){

let lengthOfTextAreas = 
    document.getElementsByClassName('textarea').length;
                    
if(lengthOfTextAreas == 0){
    let html = elem.innerHTML;
    editableDiv.innerHTML =

    `<textarea class="textarea form-control" 
    id="textarea" rows="3"> 
    ${html}</textarea>`;
}

// Listening the blur event on textarea

let textarea = document.getElementById('textarea');

textarea.addEventListener('blur',function() {
    elem.innerHTML = textarea.value;
    localStorage.setItem(
    'text', textarea.value); 

    })
});   