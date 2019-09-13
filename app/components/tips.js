import Component from '@ember/component';
import { action } from "@ember/object";
export default class addtip extends Component{
    @action
    add15(amount,total){
        this.set('total', parseFloat(this.get('amount') * 1.15).toFixed(2));
        //alert('Total:$'+parseFloat(this.total).toFixed(2));
    }
    add18(amount,total){
        this.set('total', parseFloat(this.get('amount') * 1.18).toFixed(2));
        //alert('Total:$'+parseFloat(this.total).toFixed(2));
    }
    add20(amount,total){
        this.set('total', parseFloat(this.get('amount') * 1.2).toFixed(2));
       // alert('Total:$'+parseFloat(this.total).toFixed(2));
    }
};

