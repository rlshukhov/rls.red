<script setup lang="ts">
import {ref} from 'vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar'
import {Badge} from '@/components/ui/badge'
import {useColorMode} from "@vueuse/core"
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import {GlobeIcon, ExternalLinkIcon, ImageIcon, HomeIcon, EyeNoneIcon} from "@radix-icons/vue"

const mode = useColorMode()

import avatarUrl from '@/assets/rls.jpeg'
import videoAvatarUrl from '@/assets/rls.mp4'

import githubIcon from "@/assets/icons/github.svg"
import telegramIcon from "@/assets/icons/telegram.svg"

enum socialLinkTypes {
  Github,
  Telegram
}

enum iconTypes {
  Globe,
  Image,
  Home,
}

import rlsIconUrl from "@/assets/rls.svg?url"
import nextubeDonationLogoUrl from "@/assets/nextube_donations.png"
import syberiaOSLogoUrl from "@/assets/syberia.svg?url"
import selfGraphLogoUrl from "@/assets/selfgraph.png"

const videoLoaded = ref(false);

const personalInfo = ref({
  name: 'Lane Shukhov',
  avatar: avatarUrl,
  videoAvatar: videoAvatarUrl,
  descriptions: [
    'Backend, и немного Frontend разработчик. DevOps тоже умеем, чут-чуть занимаюсь дизайном. В общем ни на что не притязающий Fullstack ☺️',
    'Так же увлекаюсь музыкой, фотографией, учусь рисовать, и состою в furry/brony фэндоме.'
  ],
  initials: 'LS'
})

const socialLinks = ref([
  {name: 'GitHub', url: 'https://github.com/rlshukhov', icon: socialLinkTypes.Github},
  {name: 'Telegram', url: 'https://t.me/rlshukhov', icon: socialLinkTypes.Telegram},
])

const projects = ref([
  {
    name: 'Этот сайт',
    logo: rlsIconUrl,
    descriptions: ['Простенький сайт визитка, собранный за несколько часов.'],
    technologies: ['Vue', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'i18n']
  },
  {
    name: 'Nextube Donations',
    logo: nextubeDonationLogoUrl,
    descriptions: ['MVP системы сбора донатов (аналог Boosty, Patreon).'],
    technologies: ['Vue', 'Vite', 'TypeScript', 'Ionic', 'i18n', 'PHP', 'Nginx', 'OpenAPI', 'MySQL', 'Docker', 'Redis'],
    link: 'https://d.nextube.ru',
  },
  {
    name: 'Syberia OS',
    logo: syberiaOSLogoUrl,
    descriptions: [
      'Участвую в проекте в роли дизайнера и веб разработчика.',
      'Создал логотип, несколько boot-анимаций и обоев.',
      'Так же сделал сайт с каталогом поддерживаемых устройств и системой для поддержки OTA обновлений Android. Сам сайт сделан в далеком 2018 году, и является жестким легаси. Делал я его будучи совсем зеленым джуном, поэтому код там просто ужастный, так делать нельзя.', 'Но тем не менее, сайт бесперебойно работает уже более 6 лет 😉'
    ],
    technologies: ['Android (AOSP)', 'Photoshop', 'Illustrator', 'After Effects', 'PHP', 'FatFree', 'Nginx'],
    link: 'https://syberiaos.com',
    githubs: [
      {title: 'Сайт', link: 'https://github.com/syberia-project/syberia_website', icon: iconTypes.Globe},
      {title: 'Дизайн', link: 'https://github.com/syberia-project/brand', icon: iconTypes.Image},
      {title: 'Общий', link: 'https://github.com/syberia-project', icon: iconTypes.Home},
    ]
  },
  {
    name: 'Self Graph',
    logo: selfGraphLogoUrl,
    descriptions: [
      'Проект создан как полигон для изучения новых для меня технологий.',
      'Он представляет из себя Ready-to-Use Vue3 компонент c текстовым WYSIWYG редактором, и self-hosted сервис-аналог telegra.ph для демонстрации работы с этим компонентом.',
      'Проект не доведен до ума, когда небудь я его доделаю 😔',
    ],
    technologies: ['Vue', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'i18n', 'TipTap', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/selfgraph',
    isWorkInProcess: true,
  },
])
</script>

<template>
  <div class="container mx-auto px-4 py-8 max-w-2xl min-w-80">

    <Card class="mb-8">
      <CardHeader>
        <div class="flex flex-col items-center sm:flex-row sm:items-start gap-6">
          <Avatar class="w-24 h-24 sm:w-32 sm:h-32">
            <AvatarImage v-if="!videoLoaded" :src="personalInfo.avatar" :alt="personalInfo.name"/>
            <video
                v-show="videoLoaded"
                class="w-24 h-24 sm:w-32 sm:h-32 object-cover"
                autoplay
                muted
                loop
                playsinline
                @canplaythrough="videoLoaded=true"
            >
              <source :src="personalInfo.videoAvatar" type="video/mp4"/>
            </video>
            <AvatarFallback v-if="!videoLoaded">{{ personalInfo.initials }}</AvatarFallback>
          </Avatar>
          <div class="flex-row">
            <div class="text-center sm:text-left">
              <CardTitle class="text-2xl sm:text-3xl font-bold mb-2">
                <Popover>
                  <PopoverTrigger as-child>
                    <Button variant="link" class="text-2xl sm:text-3xl font-bold p-0 mb-0 underline decoration-dashed decoration-muted">
                      {{ personalInfo.name }}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-48">
                    <div class="grid gap-4">
                      <div class="space-y-2">
                        <h4 class="font-medium leading-none">
                          Так же известен как
                        </h4>
                        <ul class="text-sm text-muted-foreground list-disc list-inside">
                          <li>rls</li>
                          <li>rlshukhov</li>
                          <li>Red Lane Shukhov</li>
                          <li>Red Gerson</li>
                        </ul>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardTitle>
              <CardDescription class="text-base sm:text-lg mb-4">
                <p v-for="(description, index) in personalInfo.descriptions" :class="{ 'pt-3': index > 0 }">
                  {{ description }}</p>
              </CardDescription>
            </div>
            <div class="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 w-full">
              <Button v-for="link in socialLinks" :key="link.name" variant="outline" asChild
                      class="text-sm sm:text-base">
                <a :href="link.url" target="_blank"
                   rel="noopener noreferrer">
                  <githubIcon v-if="link.icon === socialLinkTypes.Github"/>
                  <telegramIcon v-if="link.icon === socialLinkTypes.Telegram"/>
                  &nbsp;
                  {{ link.name }}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>

    <h2 class="text-xl sm:text-2xl font-bold mb-6 text-center">Проекты</h2>
    <div class="space-y-6">
      <Card v-for="project in projects" :key="project.name" class="flex flex-col">
        <CardHeader class="flex flex-row items-center gap-4">
          <Avatar class="w-12 h-12 sm:w-16 sm:h-16">
            <AvatarImage :src="project.logo" :alt="project.name"/>
            <AvatarFallback>{{ project.name[0] }}</AvatarFallback>
          </Avatar>
          <CardTitle class="text-lg sm:text-xl" :class="{'text-muted-foreground': project.isWorkInProcess}">{{ project.name }}</CardTitle>
          <div v-if="project.link || project.githubs || project.github || project.isWorkInProcess" class="ml-auto flex-none">
            <Button v-if="project.link" variant="outline" asChild class="text-sm sm:text-base mx-1" size="icon">
              <a :href="project.link" target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon/>
              </a>
            </Button>

            <Popover>
              <PopoverTrigger as-child>
                <Button v-if="project.isWorkInProcess" variant="outline" class="text-sm sm:text-base mx-1" size="icon">
                  <EyeNoneIcon/>
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-64">
                <div class="grid gap-4">
                  <div class="space-y-2">
                    <h4 class="font-medium leading-none">
                      В процессе
                    </h4>
                    <p class="text-sm text-muted-foreground">
                      Данный проект не завершен
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <DropdownMenu v-if="project.githubs">
              <DropdownMenuTrigger as-child>
                <Button variant="outline" class="text-sm sm:text-base mx-1" size="icon">
                  <githubIcon/>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent class="w-20">
                <DropdownMenuItem v-for="github in project.githubs" as-child>
                  <a :href="github.link" target="_blank" rel="noopener noreferrer">
                    <GlobeIcon v-if="github.icon === iconTypes.Globe"/>
                    <ImageIcon v-if="github.icon === iconTypes.Image"/>
                    <HomeIcon v-if="github.icon === iconTypes.Home"/>
                    &nbsp;
                    {{ github.title }}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button v-if="project.github" variant="outline" asChild class="text-sm sm:text-base mx-1" size="icon">
              <a :href="project.github" target="_blank" rel="noopener noreferrer">
                <githubIcon/>
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription class="text-sm sm:text-base mb-3">
            <p v-for="(description, index) in project.descriptions" :class="{ 'pt-3': index > 0 }">{{ description }}</p>
          </CardDescription>
          <div class="flex flex-wrap gap-2 pt-3">
            <Badge v-for="tech in project.technologies" :key="tech" variant="secondary" class="text-xs">
              {{ tech }}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>