(() => {
    //rework this with a vue instance

    const vm = new Vue({
        el : "#app",

        data : {
            modelname : "",
            modelpricing : "",
            modeldetails : ""
        },

        methods : {

            fetchData(e) {
                //debugger;
                // gets the id of the element via the event object
                let targetURL = e.currentTarget.id; 

                fetch(`./includes/connect.php?carModel=${targetURL}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const { modelName, pricing, modelDetails } = data[0];

                    this.modelname = modelName;
                    this.modeldetails = modelDetails;
                    this.modelpricing = pricing; //make temporary variables that take those values (model name would be that) data instide the vue model is assigning it
                    //parseCarData(data[0]);
                })
                .catch(function(error) {
                    console.error(error);

                });

            }
        }

    });



})();