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
        addFilterModal: function(){
            const addFilterNonModal = document.getElementById("addFilterNonModal")
            if(addFilterNonModal.style != "display: none;"){
                addFilterNonModal.style = "display: none;"
            }
            const addFilterModal = new bootstrap.Modal(document.getElementById('addFilterModal'), {})
            addFilterModal.show()
        },
        addFilterNonModal: function(){
            const addFilterNonModal = document.getElementById("addFilterNonModal")
            addFilterNonModal.style = "display: block;"
        },
        closeNonModal: function(){
            const addFilterNonModal = document.getElementById("addFilterNonModal")
            addFilterNonModal.style = "display: none;"
        },
        addModalRow: function(){
            function populateOptions(array, select){
                array.forEach(function(element,key){
                    select[key] = new Option(element, element)
                })
            }
            const filterCriteria = document.getElementById('filterCriteriaModal')
            var div = document.createElement("div")
            div.className = "row"
            var filter = document.createElement("select")
            filter.className = "col-3 offset-2"
            filter.id = "filterTypeModal"
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
        }, 
        addNonModalRow: function(){
            function populateOptions(array, select){
                array.forEach(function(element,key){
                    select[key] = new Option(element, element)
                })
            }

            const filterCriteria = document.getElementById('filterCriteriaNonModal')
            var div = document.createElement("div")
            div.className = "row"
            var filter = document.createElement("select")
            filter.className = "col-2 offset-3"
            filter.id = "filterTypeNonModal"
            var options = ["Amount", "Title", "Date"]
            populateOptions(options, filter)

            var moreLessEqual = document.createElement("select")
            moreLessEqual.className ="col-2"
            var mLEOptions = ["More", "Less", "Equal"]
            populateOptions(mLEOptions, moreLessEqual)

            var amount = document.createElement("input")
            amount.type = "number"
            amount.className = "col-2"

            var deleteRowButton = document.createElement("button")
            deleteRowButton.textContent = "-"
            deleteRowButton.className = "col-1"

            div.appendChild(filter)
            div.appendChild(moreLessEqual)
            div.appendChild(amount)
            div.append(deleteRowButton)
            filterCriteria.appendChild(div)
        },
        saveNonModal: function(){
            const addFilterNonModal = document.getElementById("addFilterNonModal")
            addFilterNonModal.style = "display: none;"
            const filterCriteriaNonModal = document.getElementById("filterCriteriaNonModal")
            let y = filterCriteriaNonModal.children.length
            for (let i = 1; i < y; i++) {
                console.log("removing child")
                filterCriteriaNonModal.removeChild(filterCriteriaNonModal.lastChild)
            }
            alert("saved :D")
        },
        saveModal: function(){
            const filterCriteriaModal = document.getElementById("filterCriteriaModal")
            let y = filterCriteriaModal.children.length
            for (let i = 1; i < y; i++) {
                console.log("removing child")
                filterCriteriaModal.removeChild(filterCriteriaModal.lastChild)
            }
            alert("saved :D")
        }
    }
}).mount('body')