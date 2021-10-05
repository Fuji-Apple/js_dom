const addForm  = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter   = document.getElementById('filter');

// Form submit event
addForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
    e.preventDefault();
    var input  = document.getElementById('inputItem');
    var alert1 = document.getElementById('alert1');

    if(document.getElementById('inputItem').value === ''){
        input.classList.add('error');
        alert1.classList.add('alert1');
        alert1.style.display = 'block';
    }
    else{
        const newItem = document.getElementById('inputItem').value;
        const li      = document.createElement('li');
        li.className  = 'list-group-item';

        li.appendChild(document.createTextNode(newItem));

        const delBtn     = document.createElement('button');
        delBtn.className = 'btn btn-danger btn-sm float-right delete';

        delBtn.appendChild(document.createTextNode('X'));

        li.appendChild(delBtn);
        
        itemList.appendChild(li);

        document.getElementById('inputItem').value = '';
        input.classList.remove('error');
        alert1.style.display = 'none';
    }
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    // convert text ke lowercase
    var text = e.target.value.toLowerCase();
    // get semua <li>
    var items = itemList.getElementsByTagName('li');
    
    // convert items / <li> ke array
    Array.from(items).forEach(function(item){
        // ambil textContent dari var item
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            // != -1 berarti true (variabel itemName match dgn indexOf variabel text)
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}