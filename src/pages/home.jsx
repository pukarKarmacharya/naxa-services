import Card from "../components/Card";
import {useSelector} from 'react-redux';

export const Home = ({objref}) => {
  const services = useSelector(state => state.myReducer.services);

  return (
    <div>
      {services.map((card,index) => (
        <div>
          <Card
            key={card.id}
            image={card?.photo}
            icon={card?.icon}
            title={card.title}
            description1={card.description1}
            description2={card.description2}
            section={objref[index]}
          />
        </div>
      ))}
    </div>
  );
};


