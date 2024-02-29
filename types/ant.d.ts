/*
 * @Descripttion:
 * @Author: LongWeiYi
 * @Date: 2021-12-10 10:49:52
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-12-13 10:49:58
 * @FilePath: \chexiangbao_admin\types\ant.d.ts
 */
interface IUpdateImg {
  code: number
  data: {
    fileUrl: string
  }
}

export interface FileItem {
  uid: string
  name?: string
  status?: string
  response?: IUpdateImg
  url?: string
  percent?: number
  preview?: string
  originFileObj?: any
  thumbUrl?: string
}

export interface FileInfo {
  file: FileItem
  fileList: FileItem[]
}
