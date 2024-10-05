#!/usr/bin/env bash

variables=(
  TELEGRAM_BOT_HANDLE
)

fileContent="window.env = {"
for variable in "${variables[@]}"
do
  :
  fileContent+=\"${variable}\":\"${!variable}\",
done
fileContent+="}"

resultDir="./public/scripts"
if [[ ! -d ${resultDir} ]]
  then
    mkdir -p ${resultDir}
  fi

echo $fileContent > ${resultDir}/environment.js