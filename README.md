# silqwer's blog

> https://next-my-blog-tau.vercel.app/

## 사용 라이브러리

### [github-label-sync](https://github.com/Financial-Times/github-label-sync): repository label을 한번에 [적용](https://velog.io/@rimo09/Github-github-label-%ED%95%9C%EB%B2%88%EC%97%90-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)

1. access-token필요
   <img width="775" alt="스크린샷 2023-08-27 오전 11 24 51" src="https://github.com/silqwer/next-my-blog/assets/4418255/68924b0c-df10-4923-aa2c-7894db1992b2">

2. terminal 명령

   ```bash
   // 명령어 예
   github-label-sync --access-token [access-token] --labels label.json [계정]/[리포지토리]

   github-label-sync --access-token ghp_itisaccesstoken --labels label.json silqwer/next-my-blog
   ```

3. 결과
   <img width="626" alt="스크린샷 2023-08-27 오전 11 21 30" src="https://github.com/silqwer/next-my-blog/assets/4418255/e189a83e-1755-4ae1-9816-20c50fc68007">

4. 확인
   <img width="676" alt="스크린샷 2023-08-27 오전 11 42 18" src="https://github.com/silqwer/next-my-blog/assets/4418255/be0323ae-f17c-4de8-bf62-58d25e37ea86">
