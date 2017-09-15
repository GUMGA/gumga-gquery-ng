import { GQuery, Criteria, ComparisonOperator, LogicalOperator } from './models';

declare let window;

window.GQuery   = window.GQuery || GQuery;
window.Criteria = window.Criteria || Criteria;
window.ComparisonOperator = window.ComparisonOperator || ComparisonOperator;
window.LogicalOperator = window.LogicalOperator || LogicalOperator;

export default window.GQuery;
