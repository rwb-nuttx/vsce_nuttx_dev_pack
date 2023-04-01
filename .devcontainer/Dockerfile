FROM ubuntu:22.04
LABEL maintainer="renweibo<renweibo@gmail.com>"
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Shanghai
ENV user=nuttx

RUN useradd -ms /bin/bash ${user}
RUN sed -i'.bak' 's,/[a-z]*.ubuntu.com,/mirrors.tuna.tsinghua.edu.cn,' /etc/apt/sources.list \
    && apt-get update \
    && apt-get install --no-install-recommends -y sudo openssh-client apt-utils git locales file curl wget xz-utils python3 python3-venv gnupg\
    && ln -s /usr/bin/python3 /usr/bin/python \
    && curl https://storage.googleapis.com/git-repo-downloads/repo > ~/repo \
    && mv ~/repo /usr/local/bin/repo && chmod a+x /usr/local/bin/repo

RUN adduser ${user} sudo
RUN echo "${user} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER ${user}
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
