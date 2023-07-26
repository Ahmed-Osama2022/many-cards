/**
 * MAKING A MULTIPLE CARDS WITH ONLY JS
 * WITH LOOPING CONCEPT 'for ()'
 */

// ================ THE MAIN ELEMENT 'CONTAINER' ============== //
const element = document.createElement('div');
// ==== THE INPUT NUMBER && BUTTON CLICK ==== //
const btn = document.getElementsByTagName('button')[0];
const inNum = document.querySelectorAll('.in-num');

// =============== START MAKING A LOOP FOR EACH INPUT VALUE ================ //
inNum.forEach(() => {
    // ========= MAKING A NEW VALUE FOR EACH CLICK =============== //
    btn.addEventListener('click' , () => {
    element.innerHTML  = '';
    let productsNumber;
    productsNumber = inNum[0].valueAsNumber;
    
    // ====== MAX NUMBER FOR PRODUCTS IS 300 !! ====== //
    if (productsNumber <= 300) {
        for (let i=0; i < productsNumber; i++) {
            // ================= Creating the elements ============== //
            const card = document.createElement('div');

            // =============== ADDING SOME MODIFICATION TO THE ATTRIBUTE ============== //

            // ============================= CREATING SOME CHILD ITEMS ===================================== //
            const heading = document.createElement('h1');
            const discription = document.createElement('h3');
            const price = document.createElement('p');

            // =========================== ADDING SOME CONTENT TO THE CHILDS ============================== //
            // heading.innerHTML = 'Hello, <span>Visitor</span>';
            heading.innerHTML = `Item <span>${i+1}</span>`;

            // ============== LET'S CHECK FOR IF THERE CONTENT OR NOT IN THE ARRAY ======================= //
            // Let's be more professional here, and add making some values to price!!
            let itemsNames = ['Shower Gel', 'Sahving cream', 'Bath cream', 'Hand Gel', 'Bath towel', 'Message cream'];
            let myPrices = [100,200,300,400,500,600];

            if (itemsNames.length > i) {
                discription.innerHTML = `<span>${itemsNames[i]}</span>, this product is having a high quality`;
                price.innerHTML = `$${myPrices[i]}`;
            } else {
                discription.innerHTML = '<span id="error">No Item to show</span>';
                price.innerHTML = '';
            };

            // discription.textContent = 'Shaving cream, this product is having a high quality';
            // =================================================== APPENDING ============================= //
            // Append the card element to the parent 'CONATAINER'
            element.appendChild(card);

            // Append childs to the the parent element
            card.appendChild(heading);
            card.appendChild(discription);
            card.appendChild(price);

            // =========== ADDING SOME MODIFICATION TO THE ELEMENTS =========== //
            // Adding the 'CONATAINER CLASS' to the parent element
            element.className = 'container';

            card.className = 'card';

            // Append the parent element to the body element
            document.body.appendChild(element);
            // ============== END OF LOOPING && CREARING THE CARDS =============== //
        };
    } else {
        // ============== MAKING an ALERT CARD =============== //
        const alertElement = document.createElement('div');
        alertElement.classList.add('card');
        alertElement.style.color = '#fc0000';
        alertElement.style.transition = 'transform 0.4s';

        alertElement.innerHTML = `<h3>Your maximum number of products is <span>300!</span></h3>`
        document.body.appendChild(alertElement);

        const removeAttention =  () => {
            alertElement.style.display = 'none';
        };

        // ==================== //
        setTimeout(() => {
            alertElement.style.transform = 'translateX(400%)';
        }, 3000);
        // ==================== //
        setTimeout(removeAttention, 3100);

    };
    // ========== END OF CONDITIONAL STATEMNT 'if ()' ========== //
    });
// ============ END OF 'forEach' ========== //
});

/**
 * END OF THE SCRIPT
 */