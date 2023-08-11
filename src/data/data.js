
import {ref,reactive} from 'vue';

const invoice1 = reactive({
    sender:'sovon',
    billTo:'',
    shipTo:'',
    invoiceNumber:'',
    date:'',
    dueDate:'',
    additionalNote:'',
    item:[
        {
        description:'item1',
        quantity:'5',
        rate:'100',
        amount:'500'
        },
        {
        description:'item2',
        quantity:'10',
        rate:'100',
        amount:'1000'
        }
    ],
    notes:'',
    terms:'',
    subtotal:'',
    tax:'',
    total:''

});

const invoice2 = reactive({
    sender:'nazmul',
    billTo:'',
    shipTo:'',
    invoiceNumber:'',
    date:'',
    dueDate:'',
    additionalNote:'',
    item:[
        {
        description:'item3',
        quantity:'5',
        rate:'100',
        amount:'500'
        },
        {
        description:'item4',
        quantity:'10',
        rate:'100',
        amount:'1000'
        }
    ],
    notes:'',
    terms:'',
    subtotal:'',
    tax:'',
    total:''

});

export {invoice1,invoice2}   
