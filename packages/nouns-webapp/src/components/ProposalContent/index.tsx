import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { processProposalDescriptionText } from '../../utils/processProposalDescriptionText';
import { Proposal } from '../../wrappers/nounsDao';
import remarkBreaks from 'remark-breaks';
import { buildEtherscanAddressLink, buildEtherscanTxLink } from '../../utils/etherscan';
import { utils } from 'ethers';
import classes from './ProposalContent.module.css';
import ProposalVoteTable from '../ProposalVoteTable';
import { SnapshotVoters } from '../../pages/NounsVote';

interface Vote {
  reason: string;
  delegate: string;
  supportDetailed: 0 | 1 | 2;
  nounsRepresented: string[];
}
interface ProposalContentProps {
  proposal?: Proposal;
  isVotesToggled?: boolean;
  metagovVotes?: SnapshotVoters[];
  isNounsDAOProp?: boolean
  votes?: Vote[];
}

export const linkIfAddress = (content: string) => {
  if (utils.isAddress(content)) {
    return (
      <a href={buildEtherscanAddressLink(content)} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return <span>{content}</span>;
};

export const transactionLink = (content: string) => {
  return (
    <a href={buildEtherscanTxLink(content)} target="_blank" rel="noreferrer">
      {content.substring(0, 7)}
    </a>
  );
};

const ProposalContent: React.FC<ProposalContentProps> = props => {
  const { isVotesToggled, proposal, votes, metagovVotes, isNounsDAOProp} = props;

  return (
    <>
      {isVotesToggled ? (
        <>
         <Row>
          <ProposalVoteTable votes={votes} metagovVotes={metagovVotes} isNounsDAOProp={isNounsDAOProp} />
          </Row>
        </>
      ) : (
        <>
          <Row>
            {proposal?.description && (
              <ReactMarkdown
                className={classes.markdown}
                children={processProposalDescriptionText(proposal.description, proposal.title)}
                remarkPlugins={[remarkBreaks]}
              />
            )}
          </Row>
          <Row>
            <Col className={classes.section}>
              <h5>Proposed Transactions</h5>
              <ol>
                {proposal?.details?.map((d, i) => {
                  return (
                    <li key={i} className="m-0">
                      {linkIfAddress(d.target)}.{d.functionSig}
                      {d.value}
                      {!!d.functionSig ? (
                        <>
                          (<br />
                          {d.callData.split(',').map((content, i) => {
                            return (
                              <Fragment key={i}>
                                <span key={i}>
                                  &emsp;
                                  {linkIfAddress(content)}
                                  {d.callData.split(',').length - 1 === i ? '' : ','}
                                </span>
                                <br />
                              </Fragment>
                            );
                          })}
                          )
                        </>
                      ) : (
                        d.callData
                      )}
                    </li>
                  );
                })}
              </ol>
            </Col>
          </Row>
          <Row>
            <Col className={classes.section}>
              <h5>Proposer</h5>
              {proposal?.proposer && proposal?.transactionHash && (
                <>
                  {linkIfAddress(proposal.proposer)} at {transactionLink(proposal.transactionHash)}
                </>
              )}
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProposalContent;
