import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function TransactionHistory({items}){
  return (
    <table className={css.transactionHistory}>
      <thead className = {css.thead}>
        <tr className = {css.thead__tr}>
          <th className = {css.thead__th}>Type</th>
          <th className = {css.thead__th}>Amount</th>
          <th className = {css.thead__th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({id, type, amount, currency}) => (
          <tr key={id} className={css.tbody__tr}>
            <td className={css.tbody__td}>{type}</td>
            <td className={css.tbody__td}>{amount}</td>
            <td className={css.tbody__td}>{currency}</td>
          </tr>
        ))}
      </tbody> 
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  })),
}

