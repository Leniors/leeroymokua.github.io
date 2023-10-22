window.onload = function() {

    let select = document.querySelector("#my_order");
    let foods = document.querySelectorAll(".food");
    let orderStatement = document.querySelector("#order_statement");
    let your_order = document.querySelector("#your_order");
    let food_types = document.querySelector("#food_types");
    let how_many = document.querySelector("#how_many");
    
    for (let i = 0; i < foods.length; i++)
    {
        let newItem = document.createElement('option');
        newItem.textContent = foods[i].innerHTML;
        select.appendChild(newItem);
    }
    your_order.innerHTML = `${select.value}: `

    for (let i = 0; i < foods.length; i++)
    {
       if (foods[i].innerHTML == select.value)
       {
            let food = foods[i];
            parent = food.parentElement;
            children = parent.nextElementSibling
            let food_list = []
            while(children) {
                food_list.push(children)
                children = children.nextElementSibling
            }
            for (let j = 0; j < food_list.length; j++)
            {
                let foodType = document.createElement('option');
                foodType.textContent = food_list[j].firstChild.innerHTML;
                food_types.appendChild(foodType);
            }
       }
    }
    how_many.value = 0;
    how_many.addEventListener("change", function(){
        if (how_many.value < 0) {
            orderStatement.innerHTML = `You can not order on negative!!!`
        }
        else if (how_many.value == 1) {
            orderStatement.innerHTML = `Your order is ${how_many.value}: ${select.value}, ${food_types.value}`
        }
        else if (how_many.value == 0) {
            orderStatement.innerHTML = ``

        }
        else {
            orderStatement.innerHTML = `Your order is ${how_many.value}: ${select.value}, ${food_types.value}`
        }
    });
    select.addEventListener("change", function() {
        how_many.value = 0;
        your_order.innerHTML = `${select.value}: `
        orderStatement.innerHTML = ``
        let type_child = food_types.firstChild;
        while (type_child) {
            food_types.removeChild(type_child)
            type_child = food_types.firstChild;
        }
        for (let i = 0; i < foods.length; i++)
        {
            if (foods[i].innerHTML == select.value)
            {
                let food = foods[i];
                parent = food.parentElement;
                children = parent.nextElementSibling
                let food_list = []
                while(children) {
                    food_list.push(children)
                    children = children.nextElementSibling
                }
                for (let j = 0; j < food_list.length; j++)
                {
                    let foodType = document.createElement('option');
                    foodType.textContent = food_list[j].firstChild.innerHTML;
                    food_types.appendChild(foodType);
                }
            }
        }
        how_many.addEventListener("change", function(){
            if (how_many.value < 0) {
                orderStatement.innerHTML = `You can not order on negative!!!`
            }
            else if (how_many.value == 1) {
                orderStatement.innerHTML = `Your order is ${how_many.value}: ${select.value}, ${food_types.value}`
            }
            else if (how_many.value == 0) {
                orderStatement.innerHTML = ``
            }
            else {
                orderStatement.innerHTML = `Your order is ${how_many.value}: ${select.value}, ${food_types.value}`
            }
        });
    });
}