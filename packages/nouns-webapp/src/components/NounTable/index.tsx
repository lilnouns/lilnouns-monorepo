import { StandaloneNounCircular } from '../../components/StandaloneNoun';
import { BigNumber as EthersBN } from 'ethers';
import classes from './NounTable.module.css';
import { GrayCircle } from '../GrayCircle';
import { pseudoRandomPredictableShuffle } from '../../utils/pseudoRandomPredictableShuffle';

interface NounTableProps {
  nounIds: string[];
  propId: number;
}
const NOUNS_PER_VOTE_CARD_DESKTOP = 7;

const isXLScreen = window.innerWidth > 1200;

const NounTable: React.FC<NounTableProps> = props => {
  const { nounIds, propId } = props;

  const shuffledNounIds = pseudoRandomPredictableShuffle(nounIds, propId);
  const paddedNounIds = shuffledNounIds
    .map((nounId: string) => {
      return <StandaloneNounCircular nounId={EthersBN.from(nounId)} />;
    })
    .concat(Array(NOUNS_PER_VOTE_CARD_DESKTOP).fill(<GrayCircle />))
    .slice(0, NOUNS_PER_VOTE_CARD_DESKTOP);

  const content = () => {
    const rows = 1;
    const rowLength = isXLScreen ? 7 : 7;

    return Array(rows)
      .fill(0)
      .map((_, i) => (
        <tr>
          {Array(rowLength)
            .fill(0)
            .map((_, j) => (
              <td>{paddedNounIds[i * rowLength + j]}</td>
            ))}
        </tr>
      ));
  };

  return <table className={classes.wrapper}>{content()}</table>;
};

export default NounTable;
