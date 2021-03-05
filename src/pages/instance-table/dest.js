export const dest = [{
  'instance_name': 'snakeapp.master.5ttp37.snake.rds.qd.aliyun',
  'url': 'https://rdsnext.console.aliyun.com/detail/rm-m5e01pl16z35ttp37/slowSql?region=cn-qingdao&DedicatedHostGroupId=',
  'slow_list': [{
    'db_name': 'snake_web',
    'sql_text': 'select telephone , log_time , ip , `name` , id_card , uid from certification_info where ( :1 <= log_id and log_id < :2 )',
    'mysql_total_execution_counts': 9,
    'mysql_total_execution_times': 682,
    'max_execution_time': 82,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 9450342,
    'parse_max_row_count': 1050752,
    'return_total_row_counts': 9450342,
    'return_max_row_count': 1050752
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select platform , count ( distinct ( uid ) ) as total_user from gift_log where send_time > :1 and send_time < :2 and is_free = :3 group by platform',
    'mysql_total_execution_counts': 6,
    'mysql_total_execution_times': 277,
    'max_execution_time': 46,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 851254421,
    'parse_max_row_count': 141920444,
    'return_total_row_counts': 12,
    'return_max_row_count': 2
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select platform , gift_id , count ( * ) as total_times , sum ( number ) as total_number from gift_log where send_time > :1 and send_time < :2 and is_free = :3 group by platform , gift_id',
    'mysql_total_execution_counts': 6,
    'mysql_total_execution_times': 257,
    'max_execution_time': 42,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 850705825,
    'parse_max_row_count': 141784643,
    'return_total_row_counts': 437,
    'return_max_row_count': 91
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select platform , gift_id , number , count ( * ) as total_times , count ( distinct ( uid ) ) as total_user , sum ( number ) as total_number from gift_log where send_time >= :1 and send_time < :2 and is_free = :3 group by platform , gift_id , number',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 100,
    'max_execution_time': 100,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 142332661,
    'parse_max_row_count': 142332661,
    'return_total_row_counts': 180,
    'return_max_row_count': 180
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select id , uid , prop_id , num , remain , `type` , log_time , ext from prop_log where ( from_unixtime ( log_time , :1 ) = :2 )',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 23,
    'max_execution_time': 23,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 19746029,
    'parse_max_row_count': 19746029,
    'return_total_row_counts': 2,
    'return_max_row_count': 2
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select max ( log_id ) as max_id from gift_log where send_time <= :1',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 31,
    'max_execution_time': 31,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 141790594,
    'parse_max_row_count': 141790594,
    'return_total_row_counts': 1,
    'return_max_row_count': 1
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select log_id , uid , gift_id , recv_uid , `number` , `source` , is_free , send_time , bag_number , platform from gift_log where ( from_unixtime ( floor ( send_time/1000 ) , :1 ) = :2 )',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 149,
    'max_execution_time': 149,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 141783592,
    'parse_max_row_count': 141783592,
    'return_total_row_counts': 1679659,
    'return_max_row_count': 1679659
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select platform , source , gift_id , count ( * ) as total_times , sum ( number ) as total_number from gift_log where send_time > :1 and send_time < :2 and is_free = :3 group by platform , source , gift_id',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 45,
    'max_execution_time': 45,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 141785351,
    'parse_max_row_count': 141785351,
    'return_total_row_counts': 374,
    'return_max_row_count': 374
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select platform , source , count ( distinct ( uid ) ) as total_user from gift_log where send_time > :1 and send_time < :2 and is_free = :3 group by platform , source',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 48,
    'max_execution_time': 48,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 142333865,
    'parse_max_row_count': 142333865,
    'return_total_row_counts': 12,
    'return_max_row_count': 12
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select count ( * ) as new_user from payed_user_temp inner join user_info where payed_user_temp.uid = user_info.uid and user_info.register_time > :1 and user_info.register_time <= :2',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 1,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 26820,
    'parse_max_row_count': 26820,
    'return_total_row_counts': 1,
    'return_max_row_count': 1
  }, {
    'db_name': 'snake_web',
    'sql_text': 'select telephone , log_time , ip , `name` , id_card , uid from certification_info where ( :1 <= log_id and log_id <= :2 )',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 73,
    'max_execution_time': 73,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 1050622,
    'parse_max_row_count': 1050622,
    'return_total_row_counts': 1050622,
    'return_max_row_count': 1050622
  }]
}, {
  'instance_name': 'snakeapp.pay.0jtv43.snake.rds.qd.aliyun',
  'url': 'https://rdsnext.console.aliyun.com/detail/rm-m5e0k10zd1b0jtv43/slowSql?region=cn-qingdao&DedicatedHostGroupId=',
  'slow_list': [{
    'db_name': 'snake_pay',
    'sql_text': 'select min ( finish_time ) , max ( finish_time ) from `order_info` where ( from_unixtime ( finish_time , :1 ) = :2 and finish_time is not null )',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 18,
    'max_execution_time': 18,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 21971480,
    'parse_max_row_count': 21971480,
    'return_total_row_counts': 1,
    'return_max_row_count': 1
  }, {
    'db_name': 'snake_pay',
    'sql_text': 'delete from `order_info` where `create_time` < :1 and `create_time` >= :2 and `order_state` = :3',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 21,
    'max_execution_time': 21,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 199837,
    'parse_max_row_count': 199837,
    'return_total_row_counts': 0,
    'return_max_row_count': 0
  }]
}, {
  'instance_name': 'roas.master.z9aez3.snake.rds.sh.aliyun',
  'url': 'https://rdsnext.console.aliyun.com/detail/rm-uf66b553917z9aez3/slowSql?region=cn-shanghai&DedicatedHostGroupId=',
  'slow_list': [{
    'db_name': 'roas',
    'sql_text': 'select currency , sum ( amount ) as total from order_log where app_id = :1 and date = :2 and days <= :3 group by currency',
    'mysql_total_execution_counts': 16064,
    'mysql_total_execution_times': 39992,
    'max_execution_time': 6,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 289668380,
    'parse_max_row_count': 115363,
    'return_total_row_counts': 16408,
    'return_max_row_count': 2
  }, {
    'db_name': 'roas',
    'sql_text': 'select * from `roas_info` where `app_id` = :1 and `date` = :2 and `type` = :3 and `region` = :4',
    'mysql_total_execution_counts': 5669,
    'mysql_total_execution_times': 11480,
    'max_execution_time': 3,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 94749676,
    'parse_max_row_count': 22510,
    'return_total_row_counts': 5669,
    'return_max_row_count': 1
  }, {
    'db_name': 'roas',
    'sql_text': "select currency , sum ( ecpm_total ) as ecpm_total from ( select a.date , a.days , a.add_date , a.completions , b.currency , b.real_ecpm , a.completions * b.real_ecpm / 1000 as ecpm_total from ad_stat a left join ( select app_id , date , ad_platform , ad_type , currency , real_ecpm from report where date >= :1 union select app_id , date , 0 as `ad_platform` , ad_type , 'usd' as currency , avg ( if ( currency = 'cny' , real_ecpm*0.1549 , real_ecpm ) ) as real_ecpm from report where date >= :2 group by app_id , date , ad_type ) b on a.app_id = b.app_id and a.ad_platform = b.ad_platform and a.ad_type = b.ad_type and a.add_date = b.date where a.date = :3 and a.app_id = :4 and days <= :5 ) a group by currency",
    'mysql_total_execution_counts': 4600,
    'mysql_total_execution_times': 16451,
    'max_execution_time': 18,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 4219050806,
    'parse_max_row_count': 5415727,
    'return_total_row_counts': 12722,
    'return_max_row_count': 3
  }, {
    'db_name': 'roas',
    'sql_text': 'select a.app_id , a.channel , a.total , a.ad_group_id , b.campaign , b.currency , b.total_cost from ( select app_id , channel , ad_group_id , sum ( `install` ) as total from roas_info where channel in ( :1 , :2 , :3 ) and date = :4 group by app_id , channel , ad_group_id ) as a , cost_info as b where a.ad_group_id = b.ad_group_id and a.channel = b.channel and a.app_id = b.app_id and b.start_time = :5 and b.is_delete = :6 and b.type = :7',
    'mysql_total_execution_counts': 183,
    'mysql_total_execution_times': 756,
    'max_execution_time': 8,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 2382867593,
    'parse_max_row_count': 32231232,
    'return_total_row_counts': 528851,
    'return_max_row_count': 4142
  }, {
    'db_name': 'roas',
    'sql_text': 'update roas_info set cost = install * :1 where app_id = :2 and channel = :3 and date = :4',
    'mysql_total_execution_counts': 154,
    'mysql_total_execution_times': 1895,
    'max_execution_time': 24,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 1823268,
    'parse_max_row_count': 16992,
    'return_total_row_counts': 0,
    'return_max_row_count': 0
  }, {
    'db_name': 'roas',
    'sql_text': 'select a.app_id , a.channel , a.total , a.ad_group_id , b.campaign , b.currency , b.total_cost from ( select app_id , channel , ad_group_id , sum ( `install` ) as total from roas_info where channel = :1 and date = :2 group by app_id , channel , ad_group_id ) as a , cost_info as b where a.ad_group_id = b.campaign_id and a.channel = b.channel and a.app_id = b.app_id and b.start_time = :3 and b.is_delete = :4 and b.type = :5',
    'mysql_total_execution_counts': 108,
    'mysql_total_execution_times': 132,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 256617420,
    'parse_max_row_count': 3242649,
    'return_total_row_counts': 144882,
    'return_max_row_count': 1558
  }, {
    'db_name': 'roas',
    'sql_text': 'select region , channel , sum ( total ) as total from user_stat where app_id = :1 and date = :2 group by region , channel',
    'mysql_total_execution_counts': 67,
    'mysql_total_execution_times': 76,
    'max_execution_time': 2,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 146962837,
    'parse_max_row_count': 2193791,
    'return_total_row_counts': 2351,
    'return_max_row_count': 193
  }, {
    'db_name': 'roas',
    'sql_text': 'select tb1.date , tb1.channel , tb1.spread , tb1.region , sum ( tb1.total ) as total , tb2.currency , tb2.cost from user_stat as tb1 left join cost_info as tb2 on tb1.app_id = tb2.app_id and tb1.channel = tb2.channel and tb1.region = tb2.region and tb2.is_delete = :1 and tb2.type = :2 and tb2.start_time <= :3 and tb2.finish_time >= :4 where tb1.app_id = :5 and tb1.date = :6 and tb1.spread <> :7 group by tb1.channel , tb1.spread , tb1.region',
    'mysql_total_execution_counts': 41,
    'mysql_total_execution_times': 47,
    'max_execution_time': 2,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 89934606,
    'parse_max_row_count': 2193590,
    'return_total_row_counts': 430,
    'return_max_row_count': 42
  }, {
    'db_name': 'roas',
    'sql_text': 'select app_id , channel , sub_channel , count ( * ) as total from device_info where add_time >= :1 and add_time < :2 group by app_id , channel , sub_channel order by app_id , channel , sub_channel asc',
    'mysql_total_execution_counts': 30,
    'mysql_total_execution_times': 54,
    'max_execution_time': 3,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 8370522,
    'parse_max_row_count': 400799,
    'return_total_row_counts': 27726,
    'return_max_row_count': 1125
  }, {
    'db_name': 'roas',
    'sql_text': 'select channel , sum ( cost ) as cost from `roas_info` where `date` >= :1 and `date` <= :2 and `type` = :3 and `app_id` in ( :4 ) group by `channel` order by `cost` desc',
    'mysql_total_execution_counts': 30,
    'mysql_total_execution_times': 37,
    'max_execution_time': 2,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 3847086,
    'parse_max_row_count': 532530,
    'return_total_row_counts': 469,
    'return_max_row_count': 20
  }, {
    'db_name': 'roas',
    'sql_text': 'select app_id , channel , sum ( active ) as total from user_stat_campaign where date = :1 group by app_id , channel',
    'mysql_total_execution_counts': 23,
    'mysql_total_execution_times': 27,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 19401053,
    'parse_max_row_count': 843721,
    'return_total_row_counts': 2068,
    'return_max_row_count': 94
  }, {
    'db_name': 'roas',
    'sql_text': 'select count ( * ) as total from ( select count ( * ) as total from `roas_info` where `app_id` in ( :1 ) and `channel` in ( :2 ) and `date` >= :3 and `date` <= :4 and `spread` like :5 escape :6 group by `app_id` , `channel` ) as a',
    'mysql_total_execution_counts': 23,
    'mysql_total_execution_times': 28,
    'max_execution_time': 3,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 4802434,
    'parse_max_row_count': 369014,
    'return_total_row_counts': 23,
    'return_max_row_count': 1
  }, {
    'db_name': 'roas',
    'sql_text': 'select count ( * ) as total from ( select count ( * ) as total from `roas_info` where `app_id` in ( :1 ) and `channel` in ( :2 ) and `date` >= :3 and `date` <= :4 and `spread` like :5 escape :6 group by `app_id` , `channel` , `spread` ) as a',
    'mysql_total_execution_counts': 12,
    'mysql_total_execution_times': 14,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 2402521,
    'parse_max_row_count': 370442,
    'return_total_row_counts': 12,
    'return_max_row_count': 1
  }, {
    'db_name': 'roas',
    'sql_text': 'select tb1.date , tb1.channel , tb1.sub_channel , tb1.region , sum ( tb1.total ) as total , tb2.currency , tb2.cost from user_stat as tb1 left join cost_info as tb2 on tb1.app_id = tb2.app_id and tb1.channel = tb2.channel and tb1.region = tb2.region and tb2.is_delete = :1 and tb2.type = :2 and tb2.start_time <= :3 and tb2.finish_time >= :4 where tb1.app_id = :5 and tb1.date = :6 and tb1.sub_channel <> :7 group by tb1.channel , tb1.sub_channel , tb1.region',
    'mysql_total_execution_counts': 7,
    'mysql_total_execution_times': 8,
    'max_execution_time': 2,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 15356307,
    'parse_max_row_count': 2193938,
    'return_total_row_counts': 933,
    'return_max_row_count': 216
  }, {
    'db_name': 'roas',
    'sql_text': 'select count ( * ) as total from ( select count ( * ) as total from `roas_info` where `app_id` in ( :1 ) and `channel` in ( :2 ) and `date` >= :3 and `date` <= :4 group by `app_id` , `channel` , `spread` ) as a',
    'mysql_total_execution_counts': 5,
    'mysql_total_execution_times': 5,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 323386,
    'parse_max_row_count': 96279,
    'return_total_row_counts': 5,
    'return_max_row_count': 1
  }, {
    'db_name': 'roas',
    'sql_text': 'update `roas_info` set `iap1` = :1 , `iapu1` = :2 where `app_id` = :3 and `date` = :4 and `channel` = :5 and `spread` = :6 and `campaign` = :7 and `campaign_id` = :8 and `ad_group_id` = :9 and `region` = :10 and `market` = :11 limit :12',
    'mysql_total_execution_counts': 3,
    'mysql_total_execution_times': 3,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 6,
    'parse_max_row_count': 2,
    'return_total_row_counts': 0,
    'return_max_row_count': 0
  }, {
    'db_name': 'roas',
    'sql_text': 'select `type` , `channel` , `sub_channel` , `spread` , count ( distinct tdid ) as total from `device_info` where `app_id` = :1 and `add_time` >= :2 and `add_time` < :3 group by `type` , `channel` , `sub_channel` , `spread`',
    'mysql_total_execution_counts': 3,
    'mysql_total_execution_times': 5,
    'max_execution_time': 2,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 1084922,
    'parse_max_row_count': 454602,
    'return_total_row_counts': 20,
    'return_max_row_count': 14
  }, {
    'db_name': 'roas',
    'sql_text': 'select count ( * ) as total from ( select count ( * ) as total from `roas_info` where `app_id` in ( :1 ) and `channel` in ( :2 ) and `date` >= :3 and `date` <= :4 and `spread` like :5 escape :6 group by `app_id` , `date` , `channel` ) as a',
    'mysql_total_execution_counts': 3,
    'mysql_total_execution_times': 3,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 273891,
    'parse_max_row_count': 91297,
    'return_total_row_counts': 3,
    'return_max_row_count': 1
  }, {
    'db_name': 'roas',
    'sql_text': 'select count ( * ) as total from ( select count ( * ) as total from `roas_info` where `app_id` in ( :1 ) and `channel` in ( :2 ) and `date` >= :3 and `date` <= :4 and `spread` like :5 escape :6 group by `app_id` , `channel` , `ad_group_id` ) as a',
    'mysql_total_execution_counts': 2,
    'mysql_total_execution_times': 2,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 726433,
    'parse_max_row_count': 363252,
    'return_total_row_counts': 2,
    'return_max_row_count': 1
  }, {
    'db_name': 'roas',
    'sql_text': 'select `app_id` , `channel` , `campaign` , count ( distinct tdid ) as total from `device_info` where `add_time` >= :1 and `add_time` < :2 group by `app_id` , `channel` , `campaign`',
    'mysql_total_execution_counts': 2,
    'mysql_total_execution_times': 8,
    'max_execution_time': 4,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 1525956,
    'parse_max_row_count': 762978,
    'return_total_row_counts': 8280,
    'return_max_row_count': 4140
  }, {
    'db_name': 'roas',
    'sql_text': 'delete from `ad_log2` where `pt` <= :1 limit :2',
    'mysql_total_execution_counts': 2,
    'mysql_total_execution_times': 4,
    'max_execution_time': 3,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 10000,
    'parse_max_row_count': 5000,
    'return_total_row_counts': 0,
    'return_max_row_count': 0
  }, {
    'db_name': 'roas',
    'sql_text': 'select `app_id` , `type` , `channel` , `sub_channel` , `spread` , count ( distinct tdid ) as total from `device_info` where `add_time` >= :1 and `add_time` < :2 group by `app_id` , `type` , `channel` , `sub_channel` , `spread`',
    'mysql_total_execution_counts': 2,
    'mysql_total_execution_times': 11,
    'max_execution_time': 7,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 1525956,
    'parse_max_row_count': 762978,
    'return_total_row_counts': 12206,
    'return_max_row_count': 6103
  }, {
    'db_name': 'roas',
    'sql_text': 'delete from `user_stat_campaign` where `date` = :1',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 1,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 839191,
    'parse_max_row_count': 839191,
    'return_total_row_counts': 0,
    'return_max_row_count': 0
  }, {
    'db_name': 'roas',
    'sql_text': 'select `user_stat` from `day_info`',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 2,
    'max_execution_time': 2,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 23539,
    'parse_max_row_count': 23539,
    'return_total_row_counts': 23539,
    'return_max_row_count': 23539
  }, {
    'db_name': 'roas',
    'sql_text': 'select app_id , channel , campaign , region , count ( * ) as active from device_info where add_time >= :1 and add_time < :2 group by app_id , channel , campaign , region',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 3,
    'max_execution_time': 3,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 390175,
    'parse_max_row_count': 390175,
    'return_total_row_counts': 4342,
    'return_max_row_count': 4342
  }, {
    'db_name': 'roas',
    'sql_text': 'select channel , sum ( cost ) as cost from `roas_info` where `date` >= :1 and `date` <= :2 and `type` = :3 and `app_id` in ( :4 , :5 ) group by `channel` order by `cost` desc',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 24,
    'max_execution_time': 24,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 4595243,
    'parse_max_row_count': 4595243,
    'return_total_row_counts': 24,
    'return_max_row_count': 24
  }, {
    'db_name': 'roas',
    'sql_text': 'select channel , sum ( cost ) as cost from `roas_info` where `date` >= :1 and `date` <= :2 and `type` = :3 and `app_id` in ( :4 , :5 , :6 , :7 , :8 , :9 , :10 , :11 , :12 , :13 ) group by `channel` order by `cost` desc',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 1,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 407122,
    'parse_max_row_count': 407122,
    'return_total_row_counts': 29,
    'return_max_row_count': 29
  }, {
    'db_name': 'roas',
    'sql_text': 'select app_id , date as active_date , region , days as active_days , ad_platform , ad_type , count ( * ) as total from ad_log2 where pt = :1 and `app_id` > :2 and `date` >= :3 group by app_id , date , region , days , ad_platform , ad_type',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 65,
    'max_execution_time': 65,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 10375840,
    'parse_max_row_count': 10375840,
    'return_total_row_counts': 74114,
    'return_max_row_count': 74114
  }, {
    'db_name': 'roas',
    'sql_text': 'select app_id , region , channel , sub_channel , spread , count ( id ) as total from device_info where add_time >= :1 and add_time < :2 group by app_id , region , channel , sub_channel , spread',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 3,
    'max_execution_time': 3,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 394591,
    'parse_max_row_count': 394591,
    'return_total_row_counts': 6551,
    'return_max_row_count': 6551
  }, {
    'db_name': 'roas',
    'sql_text': 'select app_id , date as active_date , channel , campaign , days as active_days , ad_platform , ad_type , count ( * ) as total from ad_log2 where pt = :1 and `app_id` > :2 and `date` >= :3 group by app_id , date , channel , campaign , days , ad_platform , ad_type',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 82,
    'max_execution_time': 82,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 10562872,
    'parse_max_row_count': 10562872,
    'return_total_row_counts': 167630,
    'return_max_row_count': 167630
  }, {
    'db_name': 'roas',
    'sql_text': "select app_id , date , channel , campaign , count ( distinct if ( tdid = '' , idfa , tdid ) ) as uc from order_log where app_id = :1 and date >= :2 and date <= :3 and days <= :4 and ( ( app_id = :5 and type < :6 ) or app_id <> :7 ) group by app_id , date , channel , campaign",
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 1,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 63840,
    'parse_max_row_count': 63840,
    'return_total_row_counts': 315,
    'return_max_row_count': 315
  }]
}, {
  'instance_name': 'tankdare.master.6lc4d9.snake.rds.sh.aliyun',
  'url': 'https://rdsnext.console.aliyun.com/detail/rm-uf67svnt1zs6lc4d9/slowSql?region=cn-shanghai&DedicatedHostGroupId=',
  'slow_list': [{
    'db_name': 'tank-dare',
    'sql_text': 'select uid , extra_info from `user_extra_info` where ( :1 <= uid and uid < :2 )',
    'mysql_total_execution_counts': 5,
    'mysql_total_execution_times': 21,
    'max_execution_time': 8,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 44247,
    'parse_max_row_count': 8899,
    'return_total_row_counts': 44247,
    'return_max_row_count': 8899
  }, {
    'db_name': 'tank-dare',
    'sql_text': 'select uid , item_info from `user_item_info` where ( :1 <= uid and uid < :2 )',
    'mysql_total_execution_counts': 3,
    'mysql_total_execution_times': 11,
    'max_execution_time': 7,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 26697,
    'parse_max_row_count': 8899,
    'return_total_row_counts': 26697,
    'return_max_row_count': 8899
  }, {
    'db_name': 'tank-dare',
    'sql_text': 'select uid , extra_info from `user_extra_info` where ( :1 <= uid and uid <= :2 )',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 10,
    'max_execution_time': 10,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 8900,
    'parse_max_row_count': 8900,
    'return_total_row_counts': 8900,
    'return_max_row_count': 8900
  }, {
    'db_name': 'tank-dare',
    'sql_text': 'select uid , item_info from `user_item_info` where ( :1 <= uid and uid <= :2 )',
    'mysql_total_execution_counts': 1,
    'mysql_total_execution_times': 6,
    'max_execution_time': 6,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 8900,
    'parse_max_row_count': 8900,
    'return_total_row_counts': 8900,
    'return_max_row_count': 8900
  }]
}, {
  'instance_name': 'compose.master.bz96h4.snake.rds.sh.aliyun',
  'url': 'https://rdsnext.console.aliyun.com/detail/rm-uf61mzmkmi1bz96h4/slowSql?region=cn-shanghai&DedicatedHostGroupId=',
  'slow_list': [{
    'db_name': 'snake_compose_app',
    'sql_text': 'delete from supervise_stats where time < :1 limit :2',
    'mysql_total_execution_counts': 88,
    'mysql_total_execution_times': 94,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 880000,
    'parse_max_row_count': 10000,
    'return_total_row_counts': 0,
    'return_max_row_count': 0
  }]
}, {
  'instance_name': 'jumpball-hammer.master.6qf09t.snake.rds.sh.aliyun',
  'url': 'https://rdsnext.console.aliyun.com/detail/rm-uf6e0j0u16t6qf09t/slowSql?region=cn-shanghai&DedicatedHostGroupId=',
  'slow_list': [{
    'db_name': 'hammer',
    'sql_text': 'select * from user_info where nickname = :1',
    'mysql_total_execution_counts': 502,
    'mysql_total_execution_times': 502,
    'max_execution_time': 1,
    'total_lock_times': 0,
    'max_lock_time': 0,
    'parse_total_row_counts': 1608381603,
    'parse_max_row_count': 3204547,
    'return_total_row_counts': 257,
    'return_max_row_count': 1
  }]
}]