import Joke from "../joke";

interface ChuckJokeProps {
  joke: Joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = (props) => {
  return <p>{props.joke.joke}</p>;
};

export default ChuckJoke;
