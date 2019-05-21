const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app')

chai.use(chaiHttp);

let token;

describe('/api/movies Testleri', ()=>{
	before((done)=>{
		chai.request(server)
		.post('/authenticate')
		.send({username:'karadagturgutt',password:'26081907'})
		.end((err,res) =>
		{
			token=res.body.token;
			console.log(token);
			done();
		})

		describe('/GET Metodları', ()=>{
			it('Tüm filmler listelenmeli', (done)=>
			{
				chai.request(server)
				.get('api/movies')
				.set('x-access-token',token)
				.end((err,res)=>{
					res.should.have.status(200);
					res.body.should.be.a('array');
				})
				
			})
		})
		
	})
})