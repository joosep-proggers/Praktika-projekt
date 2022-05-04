function populateOptions(array, select){
    array.forEach(function(element,key){
        select[key] = new Option(element, element)
    })
}

document.addEventListener('change',(e) => {
    if(e.target.id == "filterTypeModal" || e.target.id == "filterTypeNonModal"){
        var parent = e.target.parentElement
        while(parent.lastChild.id != "filterTypeModal" && parent.lastChild.id != "filterTypeNonModal"){
            parent.removeChild(parent.lastChild)
        }

        var deleteRowButton = document.createElement("button")
        deleteRowButton.textContent = "-"
        deleteRowButton.className = "col-1"
        deleteRowButton.id = "deleteRowButton"
        
        if(e.target.value == "Amount"){
            var moreLessEqual = document.createElement("select")
            moreLessEqual.className ="col-2"
            var mLEOptions = ["More", "Less", "Equal"]
            populateOptions(mLEOptions, moreLessEqual)

            var amount = document.createElement("input")
            amount.type = "number"
            amount.className = "col-2"

            if(parent.lastChild.id == "filterTypeModal"){
                amount.className = "col-3"
                moreLessEqual.className = "col-3"
            }

            parent.appendChild(moreLessEqual)
            parent.appendChild(amount)
            if(parent.firstChild.tagName != "H5"){
                parent.append(deleteRowButton)
            }

          } else if (e.target.value == "Title"){
            var startsHasEnds = document.createElement("select")
            startsHasEnds.className ="col-2"
            var sHEOptions = ["Starts with", "Has", "Ends with"]
            populateOptions(sHEOptions, startsHasEnds)

            var text = document.createElement("input")
            text.type = "text"
            text.className = "col-2"

            if(parent.lastChild.id == "filterTypeModal"){
                text.className = "col-3"
                startsHasEnds.className = "col-3"
            }

            parent.appendChild(startsHasEnds)
            parent.appendChild(text)
            if(parent.firstChild.tagName != "H5"){
                parent.append(deleteRowButton)
            }

          } else if (e.target.value == "Date"){
            var fromDuringBefore = document.createElement("select")
            fromDuringBefore.className ="col-2"
            var fDEOptions = ["From", "During", "Before"]
            populateOptions(fDEOptions, fromDuringBefore)

            var date = document.createElement("input")
            date.type = "date"
            date.className = "col-2"
            
            if(parent.lastChild.id == "filterTypeModal"){
                date.className = "col-3"
                fromDuringBefore.className = "col-3"
            }

            parent.appendChild(fromDuringBefore)
            parent.appendChild(date)
            if(parent.firstChild.tagName != "H5"){
                parent.append(deleteRowButton)
            }
          }
     }
 });
