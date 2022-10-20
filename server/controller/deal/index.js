module.exports = {};
/**
 TODO : 거래 소유권 이전 DB 스키마 변경 하도록 ( )
 1.구매자는 구매하고 허가를 받으면, 구매자 Nft스키마에 tokenList에 push
 2.판매자는 토큰을 판매하면, 판매자 Nft스키마 tokenList에 pull
    2-1. 내가 구매한 토큰은 판매가 불가능하다면,
        2-1-1 민팅tokenList와 구매tokenList 분리
    2-2. 내가 구매한 토큰을 판매가 가능하면,
        2-2-2 tokenList 그대로 유지

 */
