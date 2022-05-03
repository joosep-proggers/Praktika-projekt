const vue = Vue.createApp({
    data() {
        return {
            filters: [
                { name: "ball", id: 1},
                { name: "scratch", id: 2},
                { name: "bruh", id: 3}
            ]
        }
    },
    /*async created(){
        this.filters = await ()         saab api kaudu andmebaasist varasemad filtrid ja lisab menüüsse
    }*/
    methods: {
        addFilter: function(){
            const addFilterModal = new bootstrap.Modal(document.getElementById('addFilterModal'), {})
            addFilterModal.show()
        },
        addModalRow: function(){
            function populateOptions(array, select){
                array.forEach(function(element,key){
                    select[key] = new Option(element, element)
                })
            }
            
            const filterCriteria = document.getElementById('filterCriteria')
            var div = document.createElement("div")
            div.className = "row"
            var filter = document.createElement("select")
            filter.className = "col-3 offset-2 filterType"
            var options = ["Amount", "Title", "Date"]
            populateOptions(options, filter)

            var moreLessEqual = document.createElement("select")
            moreLessEqual.className ="col-3"
            var mLEOptions = ["More", "Less", "Equal"]
            populateOptions(mLEOptions, moreLessEqual)

            var amount = document.createElement("input")
            amount.type = "number"
            amount.className = "col-3"

            var deleteRowButton = document.createElement("button")
            deleteRowButton.textContent = "-"
            deleteRowButton.className = "col-1"

            div.appendChild(filter)
            div.appendChild(moreLessEqual)
            div.appendChild(amount)
            div.append(deleteRowButton)
            filterCriteria.appendChild(div)
        }
    }
}).mount('body')