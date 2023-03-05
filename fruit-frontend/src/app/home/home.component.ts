import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counter = 1;
  allProduct = [
    {
      name: 'Apple',
      price:100,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 1,
      imgUrl: '../assets/immages/apple.png',
    },
    {
      name: 'Grapes',
      price:120,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 2,
      imgUrl: '../assets/immages/grapes.png',
    },
    {
      name: 'Banana',
      price:30,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 3,
      imgUrl: '../assets/immages/banana.png',
    },
    {
      name: 'Guava',
      price:80,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/guava.png'
    },
    {
      name: 'Strawberry',
      price:200,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/sreawberry.png'
    },
     {
      name: 'Mango',
      price:130,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/mango.png'
    }, 
    {
      name: 'Kiwi',
      price:70,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/kiwi.png'
    },
     {
      name: 'Watermelon',
      price:30,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/watermelon.png'
    },
    {
      name: 'Lemon',
      price:80,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/lemon.png'
    },
    {
      name: 'Orange',
      price:100,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/orange.png'
    },
    {
      name: 'Papaya',
      price:50,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/papaya.png'
    },
    {
      name: 'Dragon',
      price:110,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/dragon.png'
    },
    {
      name: 'Custard-Apple',
      price:80,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/custard.png'
    },
    {
      name: 'Pomegranate',
      price:150,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/pomegranate.png'
    },
    {
      name: 'Pineapple',
      price:70,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quisquam.',
      id: 4,
      imgUrl: '../assets/immages/pineapple.png'
    },
  ];
  title = 'project';

  counterClien(symbol: string, counter: HTMLElement, price_p: any,price_ptag:HTMLElement) {
    const counterValue = +counter.innerText;
    const priceP = +price_p;

    if (symbol === '+') {
      counter.innerText = counterValue + 1 + '';
      price_ptag.innerText = priceP*(+counter.innerText) +'';
    } else if (counterValue > 1) {
      counter.innerText = counterValue - 1 + '';
      price_ptag.innerText = priceP*(+counter.innerText) +'';
    }
  }

  purchaseSuccess(){
    Swal.fire({title:"Thank you...", text:"You Purchased succesfully!",  icon:"success" , })
    setTimeout(() => {
      console.log("Timer complete!");
    }, 5000);
  }


}
