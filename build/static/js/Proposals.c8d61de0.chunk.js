(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1104:function(e,a,t){"use strict";t.d(a,"a",function(){return k});var n=t(1133),l=t.n(n),r=t(128),o=t.n(r),s=t(1107),c=t.n(s),p=t(1111),i=t.n(p),u=t(2),m=t.n(u),d=t(8),g=t(5),E=t(15),f=t(16),_=t(24),v=t(23),b=t(25),y=t(0),h=t.n(y),M=t(3),w=t(18),k=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(_.a)(this,Object(v.a)(a).call(this,e))).loadDatas=Object(g.a)(m.a.mark(function e(){var a,n,l,r,o=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1&&void 0!==o[1]?o[1]:40,l=t.state.filter,e.next=5,w.a.getTokens(Object(d.a)({sort:"rank",limit:n,start:(a-1)*n},l));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)})),t.handleTableChange=function(e,a,n){var l=Object(d.a)({},t.state.pagination);l.current=e.current,t.setState({pagination:l}),t.fetch(Object(d.a)({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},a))},t.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.setState({loading:!0}),t.props.onPageChange?(t.props.onPageChange(e.page,e.pageSize),t.setState({loading:!1})):t.setState({loading:!1})},t.onInputChange=function(e){t.setState({searchText:e.target.value})},t.onReset=function(){t.setState({searchText:""},function(){t.onSearch()})},t.onSearch=function(){var e=t.props.tableData,a=t.state.searchText,n=new RegExp(a,"gi");t.setState({filterDropdownVisible:!1,filtered:!!a,data:e.map(function(e){return e.name.match(n)?Object(d.a)({},e,{name:h.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(a,")|(?=").concat(a,")"),"i")).map(function(e,t){return e.toLowerCase()===a.toLowerCase()?h.a.createElement("span",{key:t,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},t.setColumn=function(e){function a(e){return function(a,t){return a[e]>t[e]?1:a[e]<t[e]?-1:0}}var n={filterDropdown:h.a.createElement("div",{className:"custom-filter-dropdown"},h.a.createElement(i.a,{ref:function(e){return t.searchInput=e},placeholder:"Search name",value:t.state.searchText,onChange:t.onInputChange,onPressEnter:t.onSearch}),h.a.createElement(c.a,{type:"primary",onClick:t.onSearch},Object(M.c)("search")),h.a.createElement(c.a,{className:"btn-secondary ml-1",onClick:t.onReset},Object(M.c)("reset"))),filterIcon:h.a.createElement(o.a,{type:"filter",style:{color:t.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:t.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){t.setState({filterDropdownVisible:e},function(){t.searchInput&&t.searchInput.focus()})}},l=[],r=!0,s=!1,p=void 0;try{for(var u,m=e[Symbol.iterator]();!(r=(u=m.next()).done);r=!0){var g=u.value;if(g.sorter&&!g.filterDropdown){var E={sorter:a(g.key)};l.push(Object(d.a)({},g,E))}else if(!g.sorter&&g.filterDropdown){var f=Object(d.a)({},n);l.push(Object(d.a)({},g,f))}else if(g.sorter&&g.filterDropdown){var _=Object(d.a)({sorter:a(g.key)},n);l.push(Object(d.a)({},g,_))}else l.push(g)}}catch(v){s=!0,p=v}finally{try{r||null==m.return||m.return()}finally{if(s)throw p}}return l},console.log(e),t.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20},loading:!1},t}return Object(b.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,a=e.total,t=e.loading,n=e.data,r=e.column,o=e.bordered,s=e.pagination,c=void 0===s||s,p=e.scroll,i=e.locale,u=e.addr,m=e.transfers,g=(e.contractAddress,this.setColumn(r)),E=c?Object(d.a)({total:a},this.state.pagination):c;return h.a.createElement("div",null,u?h.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},h.a.createElement(l.a,{bordered:o,columns:g,rowKey:function(e,a){return a},dataSource:n,locale:i,scroll:p,pagination:E,loading:t,onChange:this.handleTableChange})," "):h.a.createElement("div",{className:"card table_pos"},h.a.createElement(l.a,{bordered:o,columns:g,rowKey:function(e,a){return a},dataSource:n,locale:i,scroll:p,pagination:E,loading:t,onChange:this.handleTableChange})))}}]),a}(y.Component)},3250:function(e,a,t){"use strict";t.r(a);var n=t(200),l=t.n(n),r=t(2),o=t.n(r),s=t(5),c=t(15),p=t(16),i=t(24),u=t(23),m=t(25),d=t(0),g=t.n(d),E=t(3),f=t(18),_=t(51),v=t(1104),b=t(11),y=t(82),h=t(19),M=t(7),w=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(i.a)(this,Object(u.a)(a).call(this))).onChange=function(a,t){e.load(a,t)},e.load=Object(s.a)(o.a.mark(function a(){var t,n,l,r,s,c,p,i,u,m,d,g=arguments;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=g.length>0&&void 0!==g[0]?g[0]:1,n=g.length>1&&void 0!==g[1]?g[1]:20,e.setState({loading:!0}),a.next=5,f.a.getProposalList({sort:"-number",limit:n,start:(t-1)*n});case 5:if(l=a.sent,r=l.proposal,s=l.total,["getMaintenanceTimeInterval","getAccountUpgradeCost","getCreateAccountFee","getTransactionFee","getAssetIssueFee","getWitnessPayPerBlock","getWitnessStandbyAllowance","getCreateNewAccountFeeInSystemContract","getCreateNewAccountBandwidthRate","getAllowCreationOfContracts","getRemoveThePowerOfTheGr","getEnergyFee","getExchangeCreateFee","getMaxCpuTimeOfOneTx","getAllowUpdateAccountName","getAllowSameTokenName","getAllowDelegateResource","getTotalEnergyLimit","getAllowTvmTransferTrc10","getTotalEnergyLimitNew","getAllowMultiSign","getAllowAdaptiveEnergy","getUpdateAccountPermissionFee","getMultiSignFee","getAllowProtoFilterNum","","getAllowTvmConstantinople"],c=[{id:"1000000",key:"getChargingSwitch"},{id:"1000001",key:"getSideChainGateWayList"},{id:"1000003",key:"getProposalExpireTime"},{id:"1000004",key:"getVoteWitnessSwitch"},{id:"1000007",key:"getFundInjectAddress"},{id:"1000008",key:"getFundDistributeEnableSwitch"},{id:"1000009",key:"getDayToSustainByFund"},{id:"1000010",key:"getPercentToPayWitness"}],M.r)for(p in r)for(i in r[p].paramters)r[p].key=c[i].key,r[p].proposalVal=r[p].paramters[i];else for(u in r)for(m in r[u].paramters)for(d in c)c[d].id==m&&(r[u].key=c[d].key,r[u].proposalVal=r[u].paramters[m]);e.setState({loading:!1,dataSource:r,total:s,page:t});case 12:case"end":return a.stop()}},a)})),e.state={dataSource:[],total:0,loading:!1},e}return Object(m.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){this.load()}},{key:"getColumns",value:function(){var e=this.props.intl,a=this.state.dataSource;return[{title:l()(e.formatMessage({id:"propose_number"})),dataIndex:"index",key:"index",render:function(e,t,n){return"#"+(a.length-n)}},{title:l()(e.formatMessage({id:"proposal_content_info"})),dataIndex:"proposalVal",key:"proposalVal",width:"40%",render:function(a,t,n){return g.a.createElement("div",null,M.r?g.a.createElement("div",null,"getMaintenanceTimeInterval"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_1"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/36e5)," \xa0",g.a.createElement("span",null,e.formatMessage({id:"propose_hour"}))),"getAccountUpgradeCost"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_2"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v)," \xa0",g.a.createElement("span",null,"TRX")),"getCreateAccountFee"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_3"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v)," \xa0",g.a.createElement("span",null,"TRX")),"getTransactionFee"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_4"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a)," \xa0",g.a.createElement("span",null,"Sun/byte")),"getAssetIssueFee"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_5"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v)," \xa0",g.a.createElement("span",null,"TRX")),"getWitnessPayPerBlock"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_6"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v)," \xa0",g.a.createElement("span",null,"TRX")),"getWitnessStandbyAllowance"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_7"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v)," \xa0",g.a.createElement("span",null,"TRX")),"getCreateNewAccountFeeInSystemContract"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_8"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v)," \xa0",g.a.createElement("span",null,"TRX")),"getCreateNewAccountBandwidthRate"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_9"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a)," \xa0",g.a.createElement("span",null,"bandwith/byte")),"getAllowCreationOfContracts"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_10"})),g.a.createElement("span",null,Object(E.c)("propose_activate"))),"getRemoveThePowerOfTheGr"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_11"}))),"getEnergyFee"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_12"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v," TRX")),"getExchangeCreateFee"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_13"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v," TRX")),"getMaxCpuTimeOfOneTx"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_14"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a," ms")),"getAllowUpdateAccountName"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_15"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowSameTokenName"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_16"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowDelegateResource"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_17"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyLimit"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_18"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a)),"getAllowTvmTransferTrc10"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_19"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyLimitNew"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_18_1"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a)),"getTotalEnergyCurrentLimit"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_20"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a)),"getAllowMultiSign"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_21"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getAllowAdaptiveEnergy"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_22"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed"))),"getTotalEnergyTargetLimit"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_23"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a),"/",g.a.createElement("span",null,Object(E.c)("propose_minute"))),"getTotalEnergyAverageUsage"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_24"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,g.a.createElement("span",null,a),"/",g.a.createElement("span",null,Object(E.c)("propose_minute"))):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getUpdateAccountPermissionFee"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_25"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v)," \xa0",g.a.createElement("span",null,"TRX")),"getMultiSignFee"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_26"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,a/M.v)," \xa0",g.a.createElement("span",null,"TRX")),"getAllowProtoFilterNum"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_27"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getAllowTvmConstantinople"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"propose_28"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),a?g.a.createElement("span",null,Object(E.c)("propose_allowed")):g.a.createElement("span",null,Object(E.c)("propose_not_allowed")))):g.a.createElement("div",null,"getChargingSwitch"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_1"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),"0"!=t.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getSideChainGateWayList"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_2"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,t.proposalVal)),"getProposalExpireTime"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_3"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,t.proposalVal)),"getVoteWitnessSwitch"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_4"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),"0"!=t.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getFundInjectAddress"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_5"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,t.proposalVal)),"getFundDistributeEnableSwitch"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_6"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),"0"!=t.proposalVal?g.a.createElement("span",null,Object(E.c)("propose_activate")):g.a.createElement("span",null,Object(E.c)("propose_unactivate"))),"getDayToSustainByFund"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_7"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,t.proposalVal," ",Object(E.c)("day"))),"getPercentToPayWitness"==t.key&&g.a.createElement("div",null,g.a.createElement("span",null,e.formatMessage({id:"sun_propose_8"})),g.a.createElement("span",null,e.formatMessage({id:"proposal_to"})),g.a.createElement("span",null,t.proposalVal," %"))))}},{title:l()(e.formatMessage({id:"proposer"})),dataIndex:"name",key:"name",width:"200px",render:function(e,a,t){return a.proposer.name?g.a.createElement(h.a,{address:a.proposer.address},a.proposer.name):g.a.createElement(h.a,{address:a.proposer.address},a.proposer.address)}},{title:l()(e.formatMessage({id:"proposal_time_of_creation"})),dataIndex:"createTime",key:"createTime",width:"15%",render:function(e,a,t){return g.a.createElement("span",null,g.a.createElement(b.a,{value:Number(e)}),"\xa0",g.a.createElement(b.e,{value:Number(e),hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}),"\xa0")}},{title:l()(e.formatMessage({id:"proposal_status"})),dataIndex:"state",key:"state",render:function(e,a,t){return g.a.createElement("div",null,"PENDING"==e&&g.a.createElement("div",null,g.a.createElement("span",{className:"badge badge-warning text-uppercase badge-success-radius"},Object(E.c)("proposal_voting"))),"DISAPPROVED"==e&&g.a.createElement("div",null,g.a.createElement("span",{className:"badge badge-danger text-uppercase badge-success-radius"},Object(E.c)("proposal_ineffective"))),"APPROVED"==e&&g.a.createElement("div",null,g.a.createElement("span",{className:"badge badge-success text-uppercase badge-success-radius"},Object(E.c)("proposal_effective"))),"CANCELED"==e&&g.a.createElement("div",null,g.a.createElement("span",{className:"badge badge-secondary text-uppercase badge-success-radius"},Object(E.c)("proposal_cancelled"))))}},{title:"",dataIndex:"details",key:"details",render:function(e,a,t){return g.a.createElement(_.a,{to:"/proposal/".concat(a.proposalId),className:"float-right text-primary btn btn-default btn-sm"},Object(E.c)("learn_more"))}}]}},{key:"proposalDetails",value:function(){var e=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=(e.page,e.total),t=(e.pageSize,e.loading),n=e.dataSource,l=(e.emptyState,this.getColumns()),r=this.props.intl,o=(r.formatMessage({id:"view_total"}),r.formatMessage({id:"token_unit"}),{emptyText:r.formatMessage({id:"no_commission_proposed_found"})});return g.a.createElement("main",{className:"container header-overlap committee"},g.a.createElement("div",{className:"token_black table_pos"},t&&g.a.createElement("div",{className:"loading-style"},g.a.createElement(y.b,null)),!t&&g.a.createElement(v.a,{bordered:!0,column:l,data:n,total:n.length,locale:o})))}}]),a}(g.a.Component);a.default=Object(b.h)(w)}}]);