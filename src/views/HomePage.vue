<!-- 代码已包含 CSS：使用 TailwindCSS , 安装 TailwindCSS 后方可看到布局样式效果 -->
<template>
  <div class="min-h-screen bg-white">
    <!-- 导航栏 -->
    <nav class="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <el-icon class="text-blue-600 text-2xl"><Platform /></el-icon>
          <span class="text-xl font-semibold">科技创新科技</span>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in navItems" :key="item" class="text-gray-600 hover:text-blue-600 transition-colors">{{ item }}</a>
          <el-button type="primary" class="!rounded-button whitespace-nowrap">联系我们</el-button>
        </div>
      </div>
    </nav>
    <!-- Hero Section -->
    <div class="relative h-[600px] overflow-hidden">
      <div class="absolute inset-0">
        <img :src="heroImage" alt="hero background" class="w-full h-full object-cover object-top"/>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl text-white">
          <h1 class="text-5xl font-bold mb-6">引领数字化转型 创新科技未来</h1>
          <p class="text-xl mb-8">我们致力于为企业提供创新的技术解决方案，助力企业实现数字化转型，开启智能化未来。</p>
          <el-button type="primary" size="large" class="!rounded-button whitespace-nowrap">了解更多</el-button>
        </div>
      </div>
    </div>
    <!-- 服务特色 -->
    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">我们的服务</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title"
               class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <img :src="service.image" alt="service" class="w-full h-48 object-cover object-top rounded-lg mb-6"/>
            <h3 class="text-xl font-semibold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 企业数据概览 -->
    <div class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">企业数据概览</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 p-8 rounded-xl">
            <h3 class="text-xl font-semibold mb-6">业务增长趋势</h3>
            <div ref="growthChart" class="w-full h-[400px]"></div>
          </div>
          <div class="bg-gray-50 p-8 rounded-xl">
            <h3 class="text-xl font-semibold mb-6">服务分布占比</h3>
            <div ref="serviceChart" class="w-full h-[400px]"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 客户评价 -->
    <div class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">客户评价</h2>
        <swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :space-between="30"
            :autoplay="{ delay: 3000 }"
            :pagination="{ clickable: true }"
            class="testimonials-swiper"
        >
          <swiper-slide v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="text-center px-4 md:px-20">
              <img :src="testimonial.avatar" alt="avatar" class="w-20 h-20 rounded-full mx-auto mb-6 object-cover"/>
              <p class="text-lg text-gray-600 mb-6">{{ testimonial.content }}</p>
              <h4 class="font-semibold">{{ testimonial.name }}</h4>
              <p class="text-gray-500">{{ testimonial.position }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- 数据统计 -->
    <div class="py-20 bg-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
            <div>{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <footer class="bg-gray-900 text-gray-300 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-6">
              <el-icon class="text-white text-2xl"><Platform /></el-icon>
              <span class="text-xl font-semibold text-white">科技创新科技</span>
            </div>
            <p class="text-gray-400">致力于为企业提供最前沿的技术解决方案</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li v-for="item in navItems" :key="item">
                <a href="#" class="hover:text-white transition-colors">{{ item }}</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">联系我们</h3>
            <ul class="space-y-2 text-gray-400">
              <li>电话：400-888-8888</li>
              <li>邮箱：contact@tech.com</li>
              <li>地址：北京市朝阳区科技园区88号</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">关注我们</h3>
            <div class="flex space-x-4">
              <el-icon v-for="icon in socialIcons" :key="icon" class="text-2xl cursor-pointer hover:text-white transition-colors">
                <component :is="icon" />
              </el-icon>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 科技创新科技. 保留所有权利</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Platform, Share, ChatDotRound, Position } from '@element-plus/icons-vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import imgMain from '@/assets/homePage/img_main.jpg'
import imgRgznjjfa from '@/assets/homePage/img_rgznjjfa.jpg'
import imgYjsfw from '@/assets/homePage/img_yjsfw.jpg'
import imgSjfxpt from '@/assets/homePage/img_sjfxpt.jpg'
import * as echarts from 'echarts';
const swiperModules = [Pagination, Autoplay];
const heroImage = imgMain;
const navItems = ['首页', '关于我们', '服务项目', '案例展示', '新闻资讯'];
const services = [
  {
    title: '人工智能解决方案',
    description: '运用先进的人工智能技术，为企业提供智能化升级方案，提升运营效率。',
    image: imgRgznjjfa,
  },
  {
    title: '云计算服务',
    description: '提供安全可靠的云计算基础设施，助力企业实现数字化转型。',
    image: imgYjsfw,
  },
  {
    title: '数据分析平台',
    description: '专业的数据分析平台，帮助企业挖掘数据价值，制定精准决策。',
    image: imgSjfxpt,
  }
];

const testimonials = [
  {
    name: '张明睿',
    position: '某大型科技公司 CTO',
    content: '科技创新科技为我们提供的解决方案非常专业，帮助我们显著提升了运营效率。他们的技术团队响应迅速，服务态度优秀。',
    avatar: ''
  },
  {
    name: '林雅琪',
    position: '某互联网公司 CEO',
    content: '选择科技创新科技是我们做出的最明智的决定之一。他们的技术实力和服务质量都令人印象深刻。',
    avatar: ''
  }
];
const stats = [
  { value: '500+', label: '服务客户' },
  { value: '50+', label: '技术专利' },
  { value: '100+', label: '技术团队' },
  { value: '98%', label: '客户满意度' }
];
const socialIcons = [Platform, Share, ChatDotRound, Position];

const growthChart = ref<HTMLElement | null>(null);
const serviceChart = ref<HTMLElement | null>(null);

onMounted(() => {
  // 业务增长趋势图表
  const growth = echarts.init(growthChart.value!);
  growth.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '项目数量',
        type: 'line',
        smooth: true,
        data: [150, 230, 224, 318, 435, 570],
        lineStyle: {
          color: '#2563eb'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(37, 99, 235, 0.3)'
            },
            {
              offset: 1,
              color: 'rgba(37, 99, 235, 0.1)'
            }
          ])
        }
      }
    ]
  });

  // 服务分布占比图表
  const service = echarts.init(serviceChart.value!);
  service.setOption({
    animation: false,
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '服务占比',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['60%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 35, name: '人工智能解决方案' },
          { value: 30, name: '云计算服务' },
          { value: 25, name: '数据分析平台' },
          { value: 10, name: '其他服务' }
        ]
      }
    ]
  });

  // 监听窗口大小变化，更新图表大小
  window.addEventListener('resize', () => {
    growth.resize();
    service.resize();
  });
});
</script>
<style scoped>
.testimonials-swiper {
  padding-bottom: 3rem;
}
.testimonials-swiper :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #e2e8f0;
  opacity: 1;
}
.testimonials-swiper :deep(.swiper-pagination-bullet-active) {
  background: #2563eb;
}
</style>