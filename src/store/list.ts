import { defineStore } from "pinia";

export const  listStore = defineStore('listStore',{
    state: ()=>{
        return  {
            list: ['123','456']
        }
    },
})