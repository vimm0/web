const draggableElement = document.querySelector('#first');

draggableElement.addEventListener('dragstart', e => {
    e.dataTransfer.setData("text/plain", draggableElement.id);
});

for (const dropzone of document.querySelectorAll('.drop-zone')) {
    console.log(dropzone);
    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        console.log('source', draggableElement)
        console.log('destination ', e.target);
        // console.log('over me')
    });
    dropzone.addEventListener('drop', e => {
        console.log('drop');
        e.preventDefault();
        const droppedElementId = e.dataTransfer.getData('text/plain');
        const droppedElement = document.getElementById(droppedElementId);

        dropzone.appendChild(droppedElement);
    })
}

// draggableElement.addEventListener('dragstart', e => eventHandler(e, 'dragstart'));
// draggableElement.addEventListener('drag', e => eventHandler(e, 'drag'));
// draggableElement.addEventListener('dragend', eventHandler('dragend'));
// draggableElement.addEventListener('dragenter', eventHandler('dragenter'));
// draggableElement.addEventListener('dragexit', eventHandler('dragexit'));
// draggableElement.addEventListener('dragleave', eventHandler('dragleave'));
// draggableElement.addEventListener('dragover', eventHandler('dragover'));
// draggableElement.addEventListener('dragstart', eventHandler('dragstart'));
// draggableElement.addEventListener('drop', eventHandler('drop'));

function eventHandler(event, eventName) {
    // console.log(eventName, event)
    event.dataTransfer.setData('text/plain', item.id)
}

let coa = [
    {
        id: 'chart-of-accounts',
        name: 'Chart Of Accounts',
        children: [
            {
                id: 'application-of-funds',
                name: 'Application of funds',
                children: [
                    {
                        id: 'current-assets',
                        name: 'Current Assets'
                    },
                    {
                        id: 'fixed-assets',
                        name: 'Fixed Assets'
                    },
                    {
                        id: 'investments',
                        name: 'Investments'
                    },
                    {
                        id: 'temporary-accounts',
                        name: 'Temporary accounts'
                    }
                ]
            },
            {
                id: 'source-of-funds',
                name: 'Source of funds',
                children: [

                    {
                        id: 'capital-accounts',
                        name: 'Capital Accounts'
                    },
                    {
                        id: 'current-liabilities',
                        name: 'Current Liabilities'
                    },
                    {
                        id: 'loans-liabilities',
                        name: 'Loans (Liabilities)'
                    }
                ]
            },
            {
                id: 'equity',
                name: 'Equity',
                children: [

                    {
                        id: 'capital-stock',
                        name: 'Capital Stock'
                    },
                    {
                        id: 'dividends-paid',
                        name: 'Dividends Paid'
                    },
                    {
                        id: 'opening-balance-equity',
                        name: 'Opening Balance Equity'
                    },
                    {
                        id: 'retained-earnings',
                        name: 'Retained Earnings'
                    }
                ]
            },
            {
                id: 'income',
                name: 'Income',
                children: [

                    {
                        id: 'direct-income',
                        name: 'Direct Income'
                    },
                    {
                        id: 'indirect-income',
                        name: 'Indirect Income'
                    },

                ]
            },
            {
                id: 'expenses',
                name: 'Expenses',
                children: [

                    {
                        id: 'direct-expense',
                        name: 'Direct Expense'
                    },
                    {
                        id: 'indirect-expense',
                        name: 'Indirect Expense'
                    },

                ]
            }
        ],
    }
];


// DOM
// CSSOM
// RENDER Tree
// SERVICE WORKER LIFECYCLE

