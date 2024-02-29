<!--
 * @Descripttion: 省市选择
 * @Author: LongWeiYi
 * @Date: 2021-11-11 11:38:49
 * @LastEditors: LWY😊
 * @LastEditTime: 2022-04-25 13:37:22
 * @FilePath: \chexiangbao_admin\src\components\cascaderCity\CascaderCity.vue
-->
<template>
  <div>
    <a-cascader
      v-model:value="value1"
      :options="provinceAndCityDataPlus"
      :show-search="{ filter }"
      placeholder="选择省市"
      @change="cityChange"
      style="width: 100%"
      :allowClear="false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { provinceAndCityDataPlus } from './CascaderCity'

interface Option {
  value: string
  label: string
  disabled?: boolean
  children?: Option[]
}

export default defineComponent({
  name: 'CascaderCity',
  props: {
    allowClear: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const value1 = ref<string[]>([])

    const filter = (inputValue: string, path: Option[]) => {
      return path.some(
        (option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      )
    }
    const cityChange = (value, selectedOptions: Option) => {
      // if (selectedOptions[1].label == '全部' || selectedOptions[1].label == '市辖区') {
      //   selectedOptions[1].label = undefined
      // }
      const cityData = [
        selectedOptions[0].label,
        selectedOptions[1].label == '全部' ||
        selectedOptions[1].label == '县' ||
        selectedOptions[1].label == '市辖区'
          ? undefined
          : selectedOptions[1].label
      ]
      emit('cityChange', cityData)
    }
    watch(
      () => props.allowClear,
      (value) => {
        if (value) {
          value1.value = []
        }
      }
    )

    return {
      value1,
      filter,
      cityChange,
      provinceAndCityDataPlus
    }
  }
})
</script>

<style scoped></style>
