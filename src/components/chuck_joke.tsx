import Joke from "../joke";

interface ChuckJokeProps {
  jokes: Array<Joke>;
}

const ChuckJoke: React.FC<ChuckJokeProps> = (props) => {
  const jokes = props.jokes.map((joke) => {
    return <li key={joke.id}>{joke.joke}</li>;
  });
  return <p>{jokes}</p>;
};

export default ChuckJoke;
