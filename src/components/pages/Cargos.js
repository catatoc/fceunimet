import React from 'react';
import JoinUs from '../us/JoinUs';
import Cargos from "../Cargos/Cargos";
import FloatingWhatsApp from 'react-floating-whatsapp';
import logo from './../../logo_blanco.png';
import Carousel from '../store/cards/Carousel';
import WhatsAppIcon from './../../components/svg/whatsapp-white.svg'
import '../../App.css';

export default function CargosPage() {
    const products = [
        {
          name: "Lanyard",
          image:
            "data:image/jpeg;base64,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",
          price: 3.0,
        },
        {
          name: "Hoodie",
          image:
            "data:image/jpeg;base64,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",
          price: 20.0,
        },
    
        {
          name: "Camisa",
          image:
            "data:image/jpeg;base64,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",
          price: 14.0,
        },
        {
          name: "Samancito dorado",
          image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBITEhITEBIREBcXEREWFxISEhAXFRYYIhUSFRYYHSggGBolHRMVITYiJSkrLi4uGSAzODMsNygtLisBCgoKDg0OGxAQGy0lICYtLS0yLS0tLy0uLS81LS0tLy8tLy0tLS0vLy0tMC0tLS0tLS0tLy0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABAEDBQIGB//EADgQAAIBAgQDBQYEBQUAAAAAAAABAgMRBBIhMUFRYQUTInGRMkKBobHBI2LR8AYzUnLhFBWCssL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAtEQEAAgIBAgQGAQUBAQAAAAAAAQIDESESMQQTQVEiMmFxgZGxFDOh0eHwBf/aAAwDAQACEQMRAD8A/cQAAAAAAaMbTzQkuNrrbdeZPLXqpMNUnUvdCpmjGXNGqW6qxLlo1Omw04AAAAAAAAAAAAAAkwfilUnzlZeUeRDFzNrfX+G78REKy7AAAAAAAAAAAAAAABLgtM0P6Zab7PYjh43X2lu/OpVFmAAAAAAAAAAAAANWJqZYSfJaefAxkt01mXaxudGEp5YRXJa+ZzFXppEO2nc7bSjIAAAAAAAAAAAAAABLU8NWL4TWV+a2IW+HJE+/Dcc10qLsAAAAAAAAAAAAAS4vxShDm7y22RDL8Vop+W6cRMqi7AAAAAAAAAAAAAAAAA0YyF4O261XwJZq7rx6ctUnUtlKeaKfNG6W6oiXJjU6ezTgAAAAAAAAAAAJcP4pzly8K+G5DH8V5t+G7cREKi7AAAAAAAAAAAAAAAAAMCbCOzlB+67ryf7+ZHDxuvs3fnUqSzAAAAAAAAAAAasTUyxb42083sYyW6azLVY3JhqeWKXQ5ir01iC07ltKMgAAAAAAAAAAAAAAAABLiPDOM+D8MtuO376EL/DeLfhuvMTCouwAAAAAAAAAAEuI8U4x4LxS+33IZPivFfy3XiJlUXYAAAAAAAAAAAAAAAAAABqxFLPFrmtOjMZK9VZh2s6nbGEq5oJvdaS33W+5zFbqruXbRqW4oyAAAAAAAAYbsBNgryzTfvPTfRLz22+RDDzu8+rd+OFRdgAAAAAAAAAAAAAAAAAAACT2Kv5an/ZfqQ+TJ9J/lT5q/ZWXTAAAAAAAAJcdK9oLeb9FxZHNO9Uj1/hukevsphFJJLRJWSKxERGoYmdsnQAAAAAAAAAAAAAAAAAAADViqWaLXHdcNUTyU6q6arOpMNVzRT47PzGO/VXZaNS2lGQAAAAADYEuF8UpTez0j5LiQx/Fab/pu3EaVF2AAAAAAAAAAAAAAAAAAAAAACV/h1Pyz36SPP8A28n0n+VPmr9lR6EwAAAAAJsZJu0FvPfouL/fUjmmZ1SO8t0j1lvhFJJLZLQrEREahmZ29HXAAAAAAAAAAAAAAAAAAAAAADXXpZotehjJTqrp2s6nbzhauZa+1HSX6nMV+qOe7to1LcUZAAADEpJJt6JLU5MxEbkjlPhY3bm95bdERxR1TN59W7cfCpLsAAAAAAAAAAAAAAAAAAAAAAAABLX8E1Pg9JfZkL/Bbq9J7txzGlRdgAAAJcS80lBecnyS4EMk9UxSPy3XiOpSlbTkWiNMMnQAAAAAAAAAAAAAAAAAAAAAAAAPNSCkmns0ctWLRqXYnXKfBzavCW8duseDJYrTG6T3j+Grx6wqLMAGuvVUItvgZvaKxuXYjc6a8JTaTlL2pavpyRjFWYjc95dtPpCgqyAAAAAAAAAAAAAAAAAAAAAAAAAABNjKb0nH2ofNcURy1n5q94brPpLdRqqcVJbP92KVtFo3DMxqdPZpxH/Nn+Sm/hKX+Dz/ANy/0j+VPlj6ysPQmAAAAAAAAAAAAAAAAAAAAAAAAAAAAARTi6Tcopyg34orddVrtoee0TjnqjspHxcT3TUO0pVrwjBxle2bdJcXwI4/FWzbrWNS3bFFOZl06NJQiktkeytYrGoRmdzt7NOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHmo9H5M5bs7CLs1a1P7/APzE8fhNdVvupl7QvPakAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJcVjacYyzTgrRd1mV9uRHJmxxExMx+260tM8Q09mzSc1dXc21qtVwsebwdqzNufVTLE8Oge9AAAAAAAAAAAAAAAAAAAAAAAAAAAABzcT2nrkox7yXP3V+p48viuejHG5Wri43biHOxLbpz72UlVTWWDdk07apLR8fQ8mSZmlvNmer2VrxaOmOGyp2XTVOM43ndxvF2tO7St03O28JjrSL157fkjLabTWWueC/EjDLKLk3rJqWn5bJKysTnw0ReKRExv3nf6a8ziZ2tp0pqpONKbSglpJ5otvh0+B66xeMk1xzxHvyjMx0xNoU4XHqTyTWWaduja5P7FsXiYtPRbiWLY5iNx2WnpTAAAAAAAAAAAAAAAAAAAAAAAADkdpY1SqKipKCf8yfLT2V8vXzPFnzbvGKJ17ytjpx1aauz1KlKp3ce+gmlmTSlor7cd/kSwROO1uiOqP8ALV9WiN8NveZ6kquWSdGK8ElZtNO789dPI11deScmvl9J/LmumvT7ppVJOMp045aWZXi3fVO97cFtsQm95pN8carvspERvVu6yvjJRnT7yKTTzXi76NNff5F8mea2r1x9ePtpOtImJ6ZeKNOp3k4rwKfib4pX4cnqZrXL5tqxxvn8OzNemJ76ZeDpwc1J6ZU4P3lve3N7Hf6fHSbRafTcT6nmWtEaU9nYlyWWV1JK+vvLmW8Nnm0dNu/8wxkprmOy09aQAAAAAAAAAAAAAAAAAAAAABpxldU6cpv3VfzfBepjJforNp9HaxudOVRoyoQVVtPO4uspK78T3XXxHirS2KvmT69/+LzMXnp/T1SxlOnVkoeKM0naKvaXJdLCubHjyzFeYn29yaWtXn0e59o01Ny8VpQtJWs047euZo7bxOOL755jnhyMdpjTVWwkoxpxg2u8Vpxvo3bV/X0JZMNq1rWnr3hqt4mZmfRX2fQi6bTV5axnfVprh5F/DY6zjmJ79pYyWnq4aIY5rWSekHHNupSW30+ZKviemd2ieImN+8tTj32asWlkhJzcpy3V07L7Ec8R0Vta27N03uYiOGZTdlVc05K1oaXtfb5s7NrTWM02jcejkRG+iIdmErpNbNXPq1tFoiYeaY1Ono04AAAAAAAAAAAAAAAAAAAAA5P8S1LUUv6ppPySb+qR4/HW1i17ytgj4nmjTbhGVKpKcFKLlTk1J+Fp2T4NcjNazNYtjmZjjiXZnU6tHLHaTVOcK1NJ5rp8m2tH0e/oZ8RMY7Vy0h3H8UTSWe0aspqEJQyzc1Z6Si/KXoPE3m1YpMamZj7ftzHERMzvhTh6kpVFGatKnFtvhK9rNfC5bHe1r9N45j/LNoiK7j1anS/EqrO4QteptxV9+HEl5czltETqPVrq+GOOWl4eTpwjdtt3hDRWXFy9fmSnDacUU39o/wBtdcdUy94SEakYp2ioPXbNN/ZDBWuWkVniI7/UvM1nceo6MJOc7fhwjZW0zSS4HZw4rWtaI+GI/wAuddoiI9ZV9kzvSXRtfv1PR4K28X2YzRqyw9aQAAAAAAAAAAAAAAAAAAAADkfxHdRptWTVVWb2Ts7N9NDxeO301mPdfB3n7JMPRlUrTXfpTypp0/Zlzva17aepCtLXyzHXqdejUzEVjjj6qv8AaVDW3fK2sW7SvxlF8X0+ZX+kinPzfT/TPm7+jXha05QklHOqc1li2+8hZ6edrW9SePJe1JiI3qeI9YatWImPr+luN8UFVpvWKunzXFP98C+b4qRlp3j/ANKdOJ6bJZUn3UYx1nXeaXVbv6r1ZCa28qIjm11Nx1bntCipF047udaosqfFW5dFuW1OKvfd54Y31T7Q9RwFOEbyV7LVvhY7XwmKld25cnLaZ4TxqpxpwjHOrZqiVn8PXX4LmRi9emuOsb9ZbmJ3Np4Udi/y31m7eiKeA+Sfuzn+Zee5EAAAAAAAAAAAAAAAAAAAABz+3aOehPnHxem/yuefxVOrFP7UxTq0J8PTqYijFucFfZqLzRs+DurPTgRpGTNjidxH45/lu01pbs2rDYmO1aMv7l/hmvL8RHa8T94c6sc+jXTqVKdVzqwSjJJOUfZVtpMnW2THk6skcTxuGpitq6rLdiqsaee78NWLcbarNbXbndfMplvXFM77Wj/P/WaxNtfRG+0UmnGN8tPKr6WfF247I8s+Lisx0x2jSnlTPf3e4wi1mi6tSo17SulF+fI1EVtHVWbWt7ubmJ1Oohrnh6z9pTkuKvf5XJTi8RPzbmPu1FscdmaipxTs6tOaWiembppwO2rjrEzHVWfqRNpnnUw6fZtPLSiuav6nv8JTpxR+0Ms7tKo9KYAAAAAAAAAAAAAAAAAAAADDQHDwFT/TVpUZaU5u9KXDy+3pzPnYp/p8s45+Wez0WjzK9Ud4d0+i840B8x2nRUKrS2smlyvwXxufD8VSKZNR2e3FPVXbZ2Th1UnrtFXfXkh4TFGS/PaDLbprw+iSsfciNPEyByK1T/UVVCOsIPxPm+Pw4ep87Nbz8sY69o7vRWOivVPd1z6LzgAAAAAAAAAAAAAAAAAAAAAACTtLARrwyvRrWMuMX+nQjmw1y16ZbpeaTuHKwvac8PLusQnb3Z6vTn+ZfNfTyY/EWwz5eb8StbHF46qfp3KNaM1mjJSXNO6PoRaJjcPPMTHd8x2jilUqya1itE+aXH1ufC8Vki+WZj7Pbir01dD+Hpq81xaT9L/qer/59o3aEvERxDszmkrtpJbtn05mIjcvN3cfF4+VZ93Rvr7U9tPsup8/L4m2SfLw/t6K44rHVd0cBhFShlW/F8z1YMEYq6jule83nakuwAAAAAAAAAAAAAAAAAAAAAAYbA1zm1wAgx03OLjKnnXJ/VcmYvSt41aNuxaazuHzdelUg3khUSas0tbrl1R4L+AmP7dtfR6IzxPzQ1wcl7s1/wAZHlnwWaPRXzqT6vaqyi04qaa2tGd/oKeFzxO6xpycuPWpbu+q1X441ZLrovQ9ceEyZOctvwl51a/JDuYCq4qypZF9fN8T248VccarCNrTady6MKjfAoy2pgZAAAAAAAAAAAAAAAAAAAAAAAAMWAZUBjIuSAZFyQGcq5ALAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=",
          price: 8.0,
        },
      ];
    return (
        <>
            <Cargos products={products}/>
            <div className='btn-whatsapp'>
              <a className='anchor-whatsapp' href="https://api.whatsapp.com/send?phone=584241961948" target="_blank">
                <img src={WhatsAppIcon} alt='WhatsApp'></img>
              </a>
        </div>
            <JoinUs />
        </>
    )
}