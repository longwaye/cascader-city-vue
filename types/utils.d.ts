/*
 * @Descripttion:
 * @Author: LongWeiYi
 * @Date: 2021-11-10 11:22:55
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-11-10 11:22:57
 * @FilePath: \chexiangbao_admin\types\utils.d.ts
 */
import type { ComputedRef, Ref } from 'vue'

export type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>
}
