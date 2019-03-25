// $(document).on("page:change", function(){
//     console.log('somethinfg')
//  });

// document.getElementById('app-toast').addEventListener( 
//     'click', 
//     ()=> {console.log('test')}
// )

document.addEventListener("turbolinks:load", () => {
    console.log('every page')
})

window.addEventListener('DOMContentLoaded', (event) => {

    let toaster = document.getElementById('app-toast');
    if (toaster) {
        toaster.addEventListener( 'click', (e) => {
            if (e.target.getAttribute("name")=== "close-toaster") {
                toaster.classList.toggle('show');
            }
        })
    }
});