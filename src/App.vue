<script setup>
    import {ref,reactive} from 'vue';
    import {invoice1,invoice2} from './data/data';

    const data = reactive({
        sender:'',
        billTo:'',
        shipTo:'',
        invoiceNumber:'',
        date:'',
        dueDate:'',
        additionalNote:'',
        item:[
          {
           description:'',
           quantity:'',
           rate:'',
           discount:'',
           amount:''
          }
        ],
        notes:'',
        terms:'',
        subtotal:'',
        tax:'',
        total:''

    });

    function addMoreItem(){
      data.item.push({
           description:'',
           quantity:'',
           rate:'',
           amount:''
      })
    }

  function getSubTotal(){
    let subtotal = 0;
    data.item.forEach((item)=>{
        subtotal += item.amount;
    });
    data.subtotal = subtotal;
    return subtotal;
  }

  function getTotal(){
      const tax   = data.subtotal * data.tax / 100;
      const total = data.subtotal + tax;
      data.total = total;
      return total;
  }

  function saveData(){
     console.log(data);
  }

  function removeItem(itemIndex){
     data.item.splice(itemIndex,1);
  }

  // function itemAmount(itemQuantity,itemRate,itemTax,itemIndex){
  //      const itemCost =itemQuantity * itemRate;
  //      const tax = itemCost * itemTax / 100;
  //      const itemAmount = itemCost + tax;
  //      data.item[itemIndex].discount = itemAmount;
  //      return itemAmount;
  // }
</script>

<template>
      <section class="mx-auto container bg-white border border-gray-400 min-h-screen p-12">
        <div class="flex justify-between">
            <div class="flex flex-col space-y-5 w-1/2s">
                <div class=" ">
                    <img class="w-40" src="https://www.shutterstock.com/image-vector/invoice-typographic-stamp-sign-badge-600w-1027820257.jpg" alt="">
                </div>
                <p class="mt-5">
                    Sender
                </p>
                <textarea name="" id="" cols="30" rows="2" v-model="data.sender"></textarea>
                <div class="flex space-x-2">
                    <div class="flex flex-col">
                        <span>Bill to</span>
                        <textarea name="" id="" cols="30" rows="2" v-model="data.billTo"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <span>Ship to</span>
                        <textarea name="" id="" cols="30" rows="2" v-model="data.shipTo"></textarea>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-1/2 items-end">
                <h1 class="mt-12 text-4xl uppercase text-right mb-5">Invoice</h1>
                <input class="w-[200px] text-right" type="text" placeholder="Invoice Number" v-model="data.invoiceNumber">
                <div class="mt-10 flex-y-5 text-right space-y-3 w-full">
                    <p>
                        <span>Date</span>
                        <input class="ml-2 w-[200px] " v-model="data.date">
                    </p>
                    <p>
                        <span>Due Date</span>
                        <input class="ml-2 w-[200px]" v-model="data.dueDate">
                    </p>
                    <p>
                        <span>Additional Note</span>
                        <input class="ml-2 w-[200px]" type="text" v-model="data.additionalNote">
                    </p>
                </div>
            </div>
        </div>
        <div class="mt-20">
            <table class="table-auto w-full">
                <tr class="bg-gray-800 text-left text-white">
                    <th class="p-2 pl-5 w-1/2">Item</th>
                    <th class="p-2">Quantity</th>
                    <th class="p-2">Rate</th>
                    <th class="p-2">Discount</th>
                    <th class="p-2 w-[200px] text-right pr-5">Amount</th>
                </tr>
                <tr v-for="(items,index) in data.item" :key="index">
                    <td class="py-1">
                        <input class="w-full pl-5" type="text" placeholder="Description" v-model="items.description"/>
                    </td>
                    <td class="">
                        <input class="w-full" type="number" placeholder="Quantity" v-model="items.quantity"/>
                    </td>
                    <td class="">
                        <input class="w-full" type="number" placeholder="Rate" v-model="items.rate">
                    </td>
                    <td class="">
                        <input class="w-full" type="number" placeholder="Discount" v-model="items.discount">
                    </td>
                    <td class="py-1 pr-5 text-right text-gray-800">
                        $ {{ items.amount = items.quantity * items.rate - items.discount}}
                    </td>
                    <td v-show="index>0"><button @click="removeItem(index)" class="p-1" type="button" style="background-color: rgb(216, 11, 11);color:aliceblue">Delete</button></td>
                </tr>
            </table>
            <button class="float-left mt-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="addMoreItem()">
                Add More
            </button>
            <button class="float-left mt-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded" @click="saveData()">
                Save Data
            </button>
            <button class="float-left mt-5 ml-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="Object.assign(data,invoice1)">
                Load Invoice 1
            </button>
            <button class="float-left mt-5 ml-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="Object.assign(data,invoice2)">
              Load Invoice 2
            </button>
        </div>
        <div class="mt-[200px]">
            <div class="flex justify-between">
                <div class="flex flex-col space-y-5 w-1/2">
                    <span>Notes</span>
                    <textarea name="" id="" cols="30" rows="2" v-model="data.notes"></textarea>
                    <span>Terms</span>
                    <textarea name="" id="" cols="30" rows="2" v-model="data.terms"></textarea>
                </div>
                <div class="flex flex-col w-1/2 items-end">
                    <div class="mt-10 flex-y-5 text-right space-y-3 w-full">
                        <p>
                            <span>Subtotal</span>
                            <input readonly class="focus:ring-0 focus:ring-offset-0 text-right ml-2 pr-4 w-[200px] border-0" placeholder="Subtotal" :value="getSubTotal()">
                        </p>
                        <p>
                            <span>Tax</span>
                            <input type="number" class="tax text-right w-[200px] ml-2" v-model="data.tax">
                        </p>
                        <p>
                            <span>Total</span>
                            <input readonly class="focus:ring-0 focus:ring-offset-0 text-right ml-2 pr-4 w-[200px] border-0" placeholder="Total" :value="getTotal()">
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
          input,
        textarea {
            border: 1px solid #ddd !important;
            padding: 5px;
            border-radius: 5px;
        }

        input.tax::-webkit-outer-spin-button,
        input.tax::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
</style>
