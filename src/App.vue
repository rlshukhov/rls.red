<script setup lang="ts">
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useColorMode } from "@vueuse/core"

const mode = useColorMode()

const personalInfo = ref({
  name: 'Lane Shukhov',
  avatar: '/path/to/your/avatar.jpg',
  description: 'Краткое описание о вас и ваших навыках',
  initials: 'LS'
})

const socialLinks = ref([
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername' },
])

const projects = ref([
  { 
    name: 'Проект 1', 
    logo: '/path/to/logo1.png', 
    description: 'Описание проекта 1',
    technologies: ['Vue', 'TypeScript', 'Tailwind']
  },
  { 
    name: 'Проект 2', 
    logo: '/path/to/logo2.png', 
    description: 'Описание проекта 2',
    technologies: ['React', 'JavaScript', 'CSS']
  },
  { 
    name: 'Проект 3', 
    logo: '/path/to/logo3.png', 
    description: 'Описание проекта 3',
    technologies: ['Angular', 'TypeScript', 'SCSS']
  },
])
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-2xl">
    <!-- Карточка с информацией о вас -->
    <Card class="mb-8">
      <CardHeader>
        <div class="flex flex-col items-center sm:flex-row sm:items-start gap-6">
          <Avatar class="w-24 h-24 sm:w-32 sm:h-32">
            <AvatarImage :src="personalInfo.avatar" :alt="personalInfo.name" />
            <AvatarFallback>{{ personalInfo.initials }}</AvatarFallback>
          </Avatar>
          <div class="text-center sm:text-left">
            <CardTitle class="text-2xl sm:text-3xl font-bold mb-2">{{ personalInfo.name }}</CardTitle>
            <CardDescription class="text-base sm:text-lg mb-4">{{ personalInfo.description }}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardFooter>
        <div class="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 w-full">
          <Button v-for="link in socialLinks" :key="link.name" variant="outline" asChild class="text-sm sm:text-base">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
          </Button>
        </div>
      </CardFooter>
    </Card>

    <!-- Секция с проектами -->
    <h2 class="text-xl sm:text-2xl font-bold mb-6 text-center">Мои проекты</h2>
    <div class="space-y-6">
      <Card v-for="project in projects" :key="project.name" class="flex flex-col">
        <CardHeader class="flex flex-row items-center gap-4">
          <Avatar class="w-12 h-12 sm:w-16 sm:h-16">
            <AvatarImage :src="project.logo" :alt="project.name" />
            <AvatarFallback>{{ project.name[0] }}</AvatarFallback>
          </Avatar>
          <CardTitle class="text-lg sm:text-xl">{{ project.name }}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription class="text-sm sm:text-base mb-3">{{ project.description }}</CardDescription>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="tech in project.technologies" :key="tech" variant="secondary" class="text-xs">
              {{ tech }}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>