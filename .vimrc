filetype plugin indent on " Включает определение типа файла, загрузку соответствующих ему плагинов
syntax on " Включает подсветку синтакиса

      "==========================================
" Здесь будут плагины
"==========================================

call plug#begin('~/.vim/plugged')

Plug 'junegunn/fzf'
" ==
" NERDTree
" ==
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
Plug 'ryanoasis/vim-devicons'
Plug 'scrooloose/nerdcommenter'

"Plug 'wfxr/minimap.vim'


" ==
" colorscheme
" ==
Plug 'morhetz/gruvbox'

" live-server
Plug 'manzeloth/live-server'


Plug 'ErichDonGubler/vim-sublime-monokai'
" ==
" rainbow
" ==
Plug 'luochen1990/rainbow'

" ==
" vim-indent-guides
" ==
Plug 'nathanaelkane/vim-indent-guides'


" ==
" vim-airline
" ==
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

" ==
" YouCompleteMe
" ==
Plug 'ycm-core/YouCompleteMe'
" == 
" neomake
" ==
Plug 'neomake/neomake'
"
" ==
" auto-pairs
" ==
Plug 'jiangmiao/auto-pairs'

" ==
" vim-fugitive
" ==
Plug 'tpope/vim-fugitive'

" ==
" vim-gitgutter
" ==
Plug 'airblade/vim-gitgutter'

" ==
" ctrlp.vim
" ==
Plug 'kien/ctrlp.vim'

" ==
" vim-easymotion
" ==
Plug 'easymotion/vim-easymotion'


" ==
" emmet-vim
" ==
Plug 'mattn/emmet-vim'

" ==
" vim-css-color
" ==
Plug 'ap/vim-css-color'
Plug 'kurtpreston/vim-autoformat-rails'
Plug 'chriseppstein/vim-haml'
Plug 'jsit/sasscomplete.vim'
Plug 'tpope/vim-surround'

" ==
" vim-javascript
" ==
Plug 'pangloss/vim-javascript'
Plug 'mxw/vim-jsx'
Plug 'sheerun/vim-polyglot' "Syntax highlighting for different languages
Plug 'neoclide/coc.nvim' , { 'branch' : 'release' } " Amazing autocomplete/typing support for much languages
Plug 'neoclide/coc-eslint'
Plug 'Quramy/tsuquyomi' " typescript
Plug 'maxmellon/vim-jsx-pretty'   " JS and JSX syntax
Plug 'jparise/vim-graphql'        " GraphQL syntax

Plug 'alvan/vim-closetag' " Automatic tag closin

call plug#end()

"===========================================
"=============== let =======================
"===========================================

let g:mapleader=','
"-- EMMET CONFIG --
let g:user_emmet_leader_key=','

let g:NERDCustomDelimiters = { 'jsx': { 'left': '{/*','right': '*/}' } }
" loading the plugin
let g:webdevicons_enable = 1
" adding the flags to NERDTree
let g:webdevicons_enable_nerdtree = 1
" adding to vim-airline's tabline
let g:webdevicons_enable_airline_tabline = 1
" adding the custom source to unite
let g:webdevicons_enable_unite = 1
" adding the column to vimfiler
let g:webdevicons_enable_vimfiler = 1

"======= raindbow =====
let g:rainbow_active = 1
"===== YouCompleteMe ======
let g:ycm_show_diagnostics_ui = 0 "Обрубаем YCM

" ==== airline ======
let g:airline_powerline_fonts = 1 "Включить поддержку Powerline шрифтов
let g:airline#extensions#keymap#enabled = 0 "Не показывать текущий маппинг
let g:airline_section_z = "\ue0a1:%l/%L Col:%c" "Кастомная графа положения курсора
let g:Powerline_symbols='unicode' "Поддержка unicode
let g:airline#extensions#xkblayout#enabled = 0 
let g:airline#extensions#tabline#formatter = 'unique_tail'
let g:airline#extensions#tabline#enabled = 1 " top pane
"let g:airline_theme="palenight" 
let g:airline_theme='powerlineish'
let g:airline#themes#molokai#palette = {}

"==========================================
" Настройки vim-javascript
"==========================================

let g:javascript_plugin_jsdoc = 1 "Включает подсветку синтаксиса для JSDocs
let g:javascript_plugin_flow = 1 "Включает подсветку синтаксиса для Flow
augroup javascript_folding
      au!
      au FileType javascript setlocal foldmethod=syntax
augroup END " Включает свертывание кода для javascript на основе нашего файла синтаксиса
" Обратите внимание, что это может существенно повлиять на производительность

" minimap
"let g:minimap_width = 10
"let g:minimap_auto_start = 1
"let g:minimap_auto_start_win_enter = 1
"let g:minimap_base_highlight = Normal


"===========================================
"=============== set =======================
"===========================================

set encoding=utf-8 " Ставит кодировку UTF-8

set nocompatible " Отключает обратную сщвместимость с Vi

set number " Нумерация строк
set relativenumber

set cursorline

set termguicolors

set mps+=<:> " Показывает совпадающие скобки для HTML

set autoread " Перечитывает измененные файлы автоматически

set t_Co=256 " Использовать больше цветов в терминале

set confirm " использовать диалоги вместо сообщений обошибках

set noswapfile " не использовать своп файл

set pastetoggle=

set smartindent " Умные отступы

set autoindent " Авто отступы
"==========================================
" Подсветка поиска
"==========================================

set hlsearch " Поиск с подсветкой
set incsearch " Инкриментальный поиск

"==========================================
" Включение пробелов в табы
"==========================================

set expandtab " Ставим пробелы
set tabstop=2 " 2 пробела в табе

set listchars=eol:¬,tab:>·,trail:~,extends:>,precedes:<,space:•
set list

"==========================================
" Font
"==========================================
"set guifont=Monaco:Regular:h19 " шрифт Monaco

set guifont=Fira\ Code\ Light\ Bold\ Nerd\ Font\ Complete:h14 "Это light версия
"
set laststatus=2

set directory=~/.vim/backup " Move .swp files to home directory


"===========================================
"=============== nmap ======================
"===========================================

nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)

nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)

"============== airline ==================
nnoremap <C-Tab> :bnext<CR>"
nnoremap <C-S-Tab> :bprevious<CR>
"
"
"
"
"==========================================
" Цветовые схемы
"==========================================
"let g:gruvbox_italic=1
"colorscheme gruvbox
"set background=dark
"set guifont=Monaco:h10 noanti


colorscheme sublimemonokai
let g:sublimemonokai_term_italic = 1 


"==========================================
" Настройки NERDTreeToggle
"==========================================

map <C-z> :NERDTreeToggle<CR>

"let g:WebDevIconsDisableDefaultFolderSymbolColorFromNERDTreeDir = 1
"let g:WebDevIconsDisableDefaultFileSymbolColorFromNERDTreeFile = 1

"let g:NERDTreeDisableFileExtensionHighlight = 1
"let g:NERDTreeDisableExactMatchHighlight = 1
"let g:NERDTreeDisablePatternMatchHighlight = 1

"let g:NERDTreeFileExtensionHighlightFullName = 1
"let g:NERDTreeExactMatchHighlightFullName = 1
"let g:NERDTreePatternMatchHighlightFullName = 1

"let g:NERDTreeHighlightFolders = 1 " enables folder icon highlighting using exact match
"let g:NERDTreeHighlightFoldersFullName = 1 " highlights the folder name

"set guifont=<FONT_NAME> <FONT_SIZE>



"===================================
"============ call =================
"===================================
"
" When writing a buffer (no delay).
call neomake#configure#automake('w')


"===================================
"========== autoformat =============
"===================================

"autoformat FILENAME # Format FILENAME
"autoformat '*.rb'   # Format all Ruby files in the directory



"===================================
"=========== autocmd ===============
"===================================

autocmd BufEnter *.{js,jsx,ts,tsx} :syntax sync fromstart
autocmd BufLeave *.{js,jsx,ts,tsx} :syntax sync clear

"===============SASS================
autocmd FileType css,sass,scss setlocal omnifunc=sasscomplete#CompleteSass noci
autocmd BufReadPre,BufNewFile * let b:did_vim_sass_colors = 1

"==========================================
" Настройки easymotion
"==========================================
" При работе нажать ,+s

map <Leader> <Plug>(easymotion-prefix)

let g:user_emmet_mode='n'    "enable all function in all mode.
"let g:user_emmet_install_global = 0
"autocmd FileType html,css EmmetInstall


"let g:user_emmet_settings = webapi#json#decode(join(readfile(expand('~/.snippets_custom.json')), /"\n"))







if isdirectory('./node_modules') && isdirectory('./node_modules/prettier')
      let g:coc_global_extensions += ['coc-prettier']
endif

if isdirectory('./node_modules') && isdirectory('./node_modules/eslint')
      let g:coc_global_extensions += ['coc-eslint']
endif





"==================================
"==================================
let g:user_emmet_settings = {
                  \  'variables': {'lang': 'en'},
                  \  'html': {
                        \    'default_attributes': {
                              \      'option': {'value': v:null},
                              \      'textarea': {'id': v:null, 'name': v:null, 'cols': 10, 'rows': 10},
                              \    },
                              \    'snippets': {
                                    \      'html:5': "<!DOCTYPE html>\n"
                                    \              ."<html lang=\"${lang}\">\n"
                                    \              ."<head>\n"
                                    \              ."\t<meta charset=\"${charset}\">\n"
                                    \              ."\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
                                    \              ."\t<title></title>\n"
                                    \              ."</head>\n"
                                    \              ."<body>\n\t${child}|\n</body>\n"
                                    \              ."</html>",
                                    \    },
                                    \  },
                                    \}
"==================================
"==================================











