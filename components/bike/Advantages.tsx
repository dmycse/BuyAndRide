import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ShieldCheck, 
} from 'lucide-react';

const productAdvantages = [
  {
    id: 1,
    text: 'Free Shipping on orders over $150',
    icon: <PackageCheck size={25} className='text-accent'/>
  },
  {
    id: 2,
    text: 'Free return for 30 days',
    icon: <RefreshCw size={25} className='text-accent'/>
  },
  {
    id: 3,
    text: 'The bicycle is partially assembled',
    icon: <Bike size={25} className='text-accent'/>
  },
  {
    id: 4,
    text: '2 years warranty',
    icon: <ShieldCheck size={25} className='text-accent'/>
  },
  {
    id: 5,
    text: 'Delivery 2-3 working days',
    icon: <Clock size={25} className='text-accent'/>
  },
];

export const Advantages = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      { productAdvantages.map(adv => (
          <div key={adv.id} className="flex-center gap-3">
            {adv.icon}
            <span>{adv.text}</span>
          </div>
        ))
      }
    </div>
  )
}
