/*
 * @Descripttion:
 * @Author: LongWeiYi
 * @Date: 2021-11-10 11:30:47
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-12-10 10:50:05
 * @FilePath: \chexiangbao_admin\types\index.d.ts
 */

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
declare type EmitType = (event: string, ...args: any[]) => void
