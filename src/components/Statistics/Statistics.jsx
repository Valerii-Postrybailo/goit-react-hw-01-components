import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function StatisticSection ({title, stats}){
  return (
    <section className = {css.statistics}>

      {title && (
        <h2 className = {css.title}>{title}</h2>
      )}

      <ul className = {css.statList}>
        {stats.map(({id, label, percentage}) => (
          <li key={id} className ={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

StatisticSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })),
}
